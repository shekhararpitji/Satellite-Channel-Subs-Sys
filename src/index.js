import express from "express";
import dotenv from 'dotenv'
import router from "./routes/userRoutes.js";
// import route from "./routes/userRoutes";

dotenv.config();
const app = express();
app.use("/user",router);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});