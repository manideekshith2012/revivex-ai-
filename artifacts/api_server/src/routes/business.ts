import { Router, type IRouter } from "express";
import {
  RunBusinessDiagnosisBody,
  GenerateSwotBody,
  GenerateActionPlanBody,
} from "@workspace/api-zod";
import {
  generateDiagnosisResult,
  generateSwotAnalysis,
  generateActionPlan,
} from "../lib/ai-responses";

const router: IRouter = Router();

router.get("/business/health-score", async (_req, res): Promise<void> => {
  const overall = Math.round(45 + Math.random() * 30);
  res.json({
    overall,
    riskLevel: overall < 50 ? "critical" : overall < 65 ? "high" : overall < 80 ? "moderate" : "low",
    trend: Math.random() > 0.4 ? "improving" : "declining",
    breakdown: {
      revenue: Math.round(40 + Math.random() * 40),
      marketing: Math.round(35 + Math.random() * 45),
      retention: Math.round(45 + Math.random() * 35),
      operations: Math.round(55 + Math.random() * 30),
      finance: Math.round(40 + Math.random() * 40),
    },
  });
});

router.post("/business/diagnosis", async (req, res): Promise<void> => {
  const parsed = RunBusinessDiagnosisBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  await new Promise(r => setTimeout(r, 800));

  const result = generateDiagnosisResult(
    parsed.data.industry,
    parsed.data.problemAreas,
  );

  res.json(result);
});

router.post("/business/swot", async (req, res): Promise<void> => {
  const parsed = GenerateSwotBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  await new Promise(r => setTimeout(r, 600));

  const result = generateSwotAnalysis(
    parsed.data.industry,
    parsed.data.businessDescription,
  );

  res.json(result);
});

router.post("/business/action-plan", async (req, res): Promise<void> => {
  const parsed = GenerateActionPlanBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  await new Promise(r => setTimeout(r, 700));

  const result = generateActionPlan(
    parsed.data.industry,
    parsed.data.goals,
    parsed.data.timeframe ?? "3 months",
  );

  res.json(result);
});

export default router;
