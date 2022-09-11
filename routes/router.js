import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "../docs/swagger-output.json" assert { type: "json" };

import userRoutes from "./user.js";

const router = express.Router();

router.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

router.use("/user", userRoutes);

export default router;
