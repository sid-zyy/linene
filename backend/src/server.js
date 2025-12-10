import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimter from "./middleware/rateLimter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

//middlewares
app.use(express.json()); //used to parse json bodies : req.body
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
app.use(cors());

app.use(rateLimter);

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server connected at port : ${PORT}`);
  });
});
