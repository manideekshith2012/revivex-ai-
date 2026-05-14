import { Router, type IRouter } from "express";
import healthRouter from "./health";
import chatRouter from "./chat";
import businessRouter from "./business";
import dashboardRouter from "./dashboard";

const router: IRouter = Router();

router.use(healthRouter);
router.use(chatRouter);
router.use(businessRouter);
router.use(dashboardRouter);

export default router;
