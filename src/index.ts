import * as dotenv from "dotenv";

import app from "./server";

dotenv.config();
const PORT = process.env.PORT || 3090;

app.listen(PORT, () => {
  console.log(`Server listening on: http://127.0.0.1:${PORT}`);
});
