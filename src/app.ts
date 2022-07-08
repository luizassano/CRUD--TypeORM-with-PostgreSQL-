import express from "express";
import useRouter from "./routes/routes";

const app = express();

app.use(express.json());

app.use("/users",useRouter)

export default app;