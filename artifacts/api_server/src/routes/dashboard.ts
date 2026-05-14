import { Router, type IRouter } from "express";
import { getMotivationalQuote } from "../lib/ai-responses";

const router: IRouter = Router();

router.get("/dashboard/summary", async (_req, res): Promise<void> => {
  res.json({
    healthScore: Math.round(52 + Math.random() * 28),
    activeSessions: Math.floor(3 + Math.random() * 8),
    recoveryStreak: Math.floor(7 + Math.random() * 21),
    completedActions: Math.floor(12 + Math.random() * 30),
    riskLevel: "moderate",
    weeklyProgress: Math.round(12 + Math.random() * 25),
  });
});

router.get("/dashboard/motivational-quote", async (_req, res): Promise<void> => {
  res.json(getMotivationalQuote());
});

router.get("/dashboard/recovery-metrics", async (_req, res): Promise<void> => {
  const weeks = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8"];
  let healthScore = 38;
  let revenue = 24000;
  let customerRetention = 51;
  let marketingScore = 29;

  const weekly = weeks.map(week => {
    healthScore = Math.min(92, healthScore + Math.random() * 8 + 2);
    revenue = Math.min(85000, revenue + Math.random() * 6000 + 2000);
    customerRetention = Math.min(92, customerRetention + Math.random() * 4 + 1);
    marketingScore = Math.min(88, marketingScore + Math.random() * 7 + 2);
    return {
      week,
      healthScore: Math.round(healthScore),
      revenue: Math.round(revenue),
      customerRetention: Math.round(customerRetention),
      marketingScore: Math.round(marketingScore),
    };
  });

  res.json({ weekly });
});

export default router;
