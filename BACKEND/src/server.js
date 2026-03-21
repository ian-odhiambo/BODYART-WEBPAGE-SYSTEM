import express from "express";
import cors from "cors";
import path from "path";
import customersRoutes from "./routes/v1/customersRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

console.log(process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

// Add CSP header to fix Chrome DevTools warning, this i will study it 
app.use((req, res, next) => {
res.setHeader(
      "Content-Security-Policy",
      "default-src 'self' 'unsafe-inline' https:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: https://images.unsplash.com; script-src 'self' 'unsafe-inline' 'unsafe-eval'; connect-src 'self' http://localhost:* ws://localhost:* https://*.unsplash.com; object-src 'none';" 
    );
  next();
});


if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
}
app.use(express.json());
app.use(rateLimiter);

// Simple custom middleware 
app.use((req, res, next) => {
  console.log(`Req method is ${req.method} & the req URL is ${req.url}`);
  next();
});

// API routes
app.use("/api/v1/tattoohub", customersRoutes);


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../FRONTEND", "dist", "index.html"));
});

app.use(express.static(path.join(__dirname, "../FRONTEND/dist")));
app.use('/src/assets', express.static(path.join(__dirname, '../FRONTEND/src/assets')));

app.use((req, res) => {
  if (!req.path.startsWith('/api/')) {
    res.sendFile(path.join(__dirname, "../FRONTEND", "dist", "index.html"));
  }
});

connectDB().then(() => {
  app.listen(PORT, () => {
  console.log("server started on PORT:", PORT);
  });
});