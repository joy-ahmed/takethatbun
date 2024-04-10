import express from "express";
import router from "./route";

const app = express();
app.use("/api", router);

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Hello, World!" });
});

export default app;
