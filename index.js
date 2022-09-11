import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import router from "./routes/router.js";

dotenv.config();

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
// TODO: Add whitelist for Allowed Origins
app.use(cors());

app.use("/api/v1/", router);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT} | http://localhost:${PORT}`)
);
