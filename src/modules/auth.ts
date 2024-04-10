import jwt from "jsonwebtoken";

export const createJWT = () => {
  if (!process.env.JWT_SECRET_KEY) {
    throw new Error("JWT secret key is not defined");
  }
  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    process.env.JWT_SECRET_KEY
  );
  return token;
};

export const protect = (req, res, next) => {
  const bearer = req.headers.authorization;
  if (!bearer) {
    res.status(401);
    res.json({ message: "Not authorized" });
    return;
  }

  const [, token] = bearer.split(" ");
  if (!token) {
    res.status(401);
    res.json({ message: "Not authorized" });
    return;
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = payload;
    next();
    return;
  } catch (error) {
    console.log(error);
    res.status(401);
    res.json({ message: "Not authorized" });
    return;
  }
};
