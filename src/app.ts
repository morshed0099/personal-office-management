import expess from "express";
import config from "./config";
import cors from "cors";

const app = expess();


app.use(cors());
app.use(expess.json());

app.get("/", (req, res) => {
  console.log("server runnning");
});

export default app;
