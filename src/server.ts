import express from "express";
import router from "./route";
import morgan from "morgan";

const app = express();

// middlewares
app.use(morgan("dev"));

app.use("/api", router);

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Hello, World!" });
});

export default app;
