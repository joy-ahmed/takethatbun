import express from "express";
import router from "./route";
import morgan from "morgan";
import cors from "cors";
import { protect } from "./modules/auth";

const app = express();

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", protect, router);

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Hello, World!" });
});

export default app;
