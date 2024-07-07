import express from "express";
import crypto from "crypto";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.post("/hash", (req, res) => {
  const {text, algorithm} = req.body;
  const hash = crypto.createHash(algorithm).update(text).digest("hex");
  res.json({hash});
});

// 部署到 Vercel 則不需要
//const port = 3000;
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

// 部署到 Vercel 需要增加這一行
export default app;
