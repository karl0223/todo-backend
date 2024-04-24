import mongoose from "mongoose";
import "dotenv/config";

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_DB_URL);
