import express from "express";

const app = express();
const port = 8000;

app.use(express.json());

app.post("/ksense", (req, res) => {
  const payload = req.body;
  console.log(payload);

  res.status(200).send("Daniel Thompson received payload.");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
