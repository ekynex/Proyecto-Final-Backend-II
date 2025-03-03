import express from 'express'
import dotenv from 'dotenv';
import  connectDB from "./database/index.js";
import userRoutes from "./routes/users.routes.js";
import productRoutes from "./routes/products.routes.js";
import cartRoutes from "./routes/carts.routes.js";
import ticketRoutes from "./routes/tickets.routes.js";
import authRoutes from "./routes/auth.routes.js";

//config
dotenv.config();

//settings
const app = express()
app.set("PORT", process.env.PORT || 3000);

//database
const URI = "mongodb+srv://TomasMatias:mongoDB1234@cluster0.es4ua.mongodb.net/Proyecto_final_backend_II"

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//routes
app.get('/',(req,res)=>{
    res.json({title: 'Home Page'})
})
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/carts", cartRoutes);
app.use("/api/tickets", ticketRoutes);
app.use("/api/auth", authRoutes); 

//listeners
connectDB(URI);

app.listen(app.get("PORT"),()=>{
    console.log(`Server on port http://localhost:${app.get("PORT")}`);
})
