import { Router } from "express";
import QuotesRouter from "./quotes.js";
import bodyParser from "body-parser";

const router = Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.use("/quotes", QuotesRouter);

export default router;