import express from "express";
import mongoose from "mongoose";
const app = express();
dotenv.config();
mongoose.connect(process.env.MONGO).then(console.log("MongoDB is Connected"));
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
