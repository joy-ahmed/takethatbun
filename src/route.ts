import { Router } from "express";

const router = Router();

router.get("/product", (req, res) => {
  res.json({ msg: "product" });
});

router.get("/product/:id", (req, res) => {
  const { id } = req.params;
  res.json({ msg: id });
});

router.post("/product", (req, res) => {
  const { name } = req.body;
  res.json({ msg: name });
});

router.put("/product/:id", (req, res) => {
  const { id } = req.params;
  res.json({ msg: id });
});

router.delete("/product/:id", (req, res) => {
  const { id } = req.params;
  res.json({ msg: id });
});

router.get("/update", (req, res) => {
  res.json({ msg: "update" });
});

router.get("/update/:id", (req, res) => {
  const { id } = req.params;
  res.json({ msg: id });
});

router.post("/update", (req, res) => {
  const { title } = req.body;
  res.json({ msg: title });
});

router.put("/update/:id", (req, res) => {
  const { id } = req.params;
  res.json({ msg: id });
});

router.delete("/update/:id", (req, res) => {
  const { id } = req.params;
  res.json({ msg: id });
});

// UpdatePoints

router.get("/updatepoint", (req, res) => {
  res.json({ msg: "updatepoint" });
});

router.get("/updatepoint/:id", (req, res) => {
  const { id } = req.params;
  res.json({ msg: id });
});

router.post("/updatepoint", (req, res) => {
  const { name } = req.body;
  res.json({ msg: name });
});

router.put("/updatepoint/:id", (req, res) => {
  const { id } = req.params;
  res.json({ msg: id });
});

router.delete("/updatepoint/:id", (req, res) => {
  const { id } = req.params;
  res.json({ msg: id });
});

export default router;
