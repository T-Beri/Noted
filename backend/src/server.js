import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import dotenv from "dotenv";
import {connectDB} from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors())

const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(rateLimiter);


app.use("/api/notes",notesRoutes);

connectDB().then(()=>{
    app.listen(PORT,()=>{
    console.log("Server started");
    });
})

