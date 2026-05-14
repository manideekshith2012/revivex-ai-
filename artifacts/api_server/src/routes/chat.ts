import { Router, type IRouter } from "express";
import { eq, desc } from "drizzle-orm";
import { db, chatSessionsTable, chatMessagesTable } from "@workspace/db";
import {
  CreateChatSessionBody,
  GetChatSessionParams,
  DeleteChatSessionParams,
  SendMessageParams,
  SendMessageBody,
} from "@workspace/api-zod";
import { generateAIResponse } from "../lib/ai-responses";

const router: IRouter = Router();

router.get("/chat/sessions", async (req, res): Promise<void> => {
  const sessions = await db
    .select()
    .from(chatSessionsTable)
    .orderBy(desc(chatSessionsTable.createdAt));

  res.json(sessions.map(s => ({
    ...s,
    createdAt: s.createdAt.toISOString(),
  })));
});

router.post("/chat/sessions", async (req, res): Promise<void> => {
  const parsed = CreateChatSessionBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const [session] = await db
    .insert(chatSessionsTable)
    .values({
      title: parsed.data.title,
      industry: parsed.data.industry,
      crisisMode: parsed.data.crisisMode ?? false,
    })
    .returning();

  res.status(201).json({
    ...session,
    createdAt: session.createdAt.toISOString(),
  });
});

router.get("/chat/sessions/:sessionId", async (req, res): Promise<void> => {
  const params = GetChatSessionParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }

  const [session] = await db
    .select()
    .from(chatSessionsTable)
    .where(eq(chatSessionsTable.id, params.data.sessionId));

  if (!session) {
    res.status(404).json({ error: "Session not found" });
    return;
  }

  const messages = await db
    .select()
    .from(chatMessagesTable)
    .where(eq(chatMessagesTable.sessionId, params.data.sessionId))
    .orderBy(chatMessagesTable.createdAt);

  res.json({
    ...session,
    createdAt: session.createdAt.toISOString(),
    messages: messages.map(m => ({
      ...m,
      createdAt: m.createdAt.toISOString(),
    })),
  });
});

router.delete("/chat/sessions/:sessionId", async (req, res): Promise<void> => {
  const params = DeleteChatSessionParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }

  const [deleted] = await db
    .delete(chatSessionsTable)
    .where(eq(chatSessionsTable.id, params.data.sessionId))
    .returning();

  if (!deleted) {
    res.status(404).json({ error: "Session not found" });
    return;
  }

  res.sendStatus(204);
});

router.post("/chat/sessions/:sessionId/messages", async (req, res): Promise<void> => {
  const params = SendMessageParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }

  const body = SendMessageBody.safeParse(req.body);
  if (!body.success) {
    res.status(400).json({ error: body.error.message });
    return;
  }

  const [session] = await db
    .select()
    .from(chatSessionsTable)
    .where(eq(chatSessionsTable.id, params.data.sessionId));

  if (!session) {
    res.status(404).json({ error: "Session not found" });
    return;
  }

  const [userMessage] = await db
    .insert(chatMessagesTable)
    .values({
      sessionId: params.data.sessionId,
      role: "user",
      content: body.data.content,
    })
    .returning();

  const lang = body.data.language ?? "en";
  const aiContent = generateAIResponse(body.data.content, lang);

  const [aiMessage] = await db
    .insert(chatMessagesTable)
    .values({
      sessionId: params.data.sessionId,
      role: "ai",
      content: aiContent,
    })
    .returning();

  await db
    .update(chatSessionsTable)
    .set({ messageCount: session.messageCount + 2 })
    .where(eq(chatSessionsTable.id, params.data.sessionId));

  res.status(201).json({
    userMessage: { ...userMessage, createdAt: userMessage.createdAt.toISOString() },
    aiMessage: { ...aiMessage, createdAt: aiMessage.createdAt.toISOString() },
  });
});

export default router;
