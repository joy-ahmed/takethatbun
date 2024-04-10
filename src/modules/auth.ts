import jwt from "jsonwebtoken";
import * as bcypt from "bcrypt";
import type { RequestHandler } from "express";

export const comparePasswords = (password: string | Buffer, hash: string) => {
  return bcypt.compare(password, hash);
};

export const hashPassword = (password: string | Buffer) => {
  return bcypt.hash(password, 5);
};

const jwtSecretKey = process.env.JWT_SECRET_KEY;
if (!jwtSecretKey) {
  throw new Error(
    "JWT secret key is not defreq.user: Jwt & JwtPayload = payload;ined"
  );
}

interface UserPayload {
  id: string;
  username: string;
}

export const createJWT = (user: UserPayload) => {
  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    jwtSecretKey
  );
  return token;
};

export const protect: RequestHandler = (req, res, next) => {
  const bearer = req.headers.authorization;

  if (!bearer) {
    res.status(401);
    res.send("Not authorized");
    return;
  }

  const [, token] = bearer.split(" ");
  if (!token) {
    console.log("here");
    res.status(401);
    res.send("Not authorized");
    return;
  }

  try {
    const payload = jwt.verify(token, jwtSecretKey);
    // @ts-ignore
    req.user = payload;
    console.log(payload);
    next();
    return;
  } catch (e) {
    console.error(e);
    res.status(401);
    res.send("Not a valid token");
    return;
  }
};
