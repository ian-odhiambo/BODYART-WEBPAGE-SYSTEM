import express from "express";
// import cors from "cors";
import customersRoutes from "./routes/v1/customersRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import rateLimiter from "./middleware/rateLimiter.js";



dotenv.config();

console.log(process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 5001


//middleware
app.use(cors({
  origin:"http://localhost:5173",
}));
app.use(express.json());
app.use(rateLimiter);



//this is a simple custome middleware 
app.use((req, res, next) =>{
    console.log(`Req method is ${req.method} & the req URL is ${req.url}`)
    next();
})

app.use("/api/v1/tattoohub", customersRoutes);



connectDB().then(() =>{
  app.listen(PORT, () => {
  console.log("server started on PORT:", PORT);
});

});

//mongodb+srv://odhiamboian096_db_user:Qo4M9tnr37zdbYWw@cluster0.imoqyoo.mongodb.net/?appName=Cluster0