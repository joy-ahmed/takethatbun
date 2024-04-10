import prisma from "../db";
import type { RequestHandler } from "express";
import { comparePasswords, createJWT, hashPassword } from "../modules/auth";

export const createNewUser: RequestHandler = async (req, res) => {
  const hashedPass = await hashPassword(req.body.password);
  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      password: hashedPass,
    },
  });
  const token = createJWT(user);
  res.status(201).json({ token });
};

export const singin: RequestHandler = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      username: req.body.username,
    },
  });

  if (!user) {
    res.status(401);
    res.json({ msg: "User not found" });
    return;
  }
  const isValid = await comparePasswords(req.body.password, user?.password);
  if (!isValid) {
    res.status(401);
    res.json({ msg: "Invalid username or password" });
    return;
  }
  const token = createJWT(user);
  res.json({ token });
};
