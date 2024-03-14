import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
import categoryRoutes from './routes/categoryRoutes.js';
import cors from 'cors';

//config env
dotenv.config();

//database config
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
//routes
app.use('/api/v1/auth' , authRoutes);
app.use('/api/v1/category' , categoryRoutes);

//rest api
app.get('/' , (req,res) => {
    res.send({
        message:'Welcome to Spellcart, MERN Stack Project'
    });
});

//PORT
const PORT = process.env.PORT || 8000;

//run listen
app.listen(PORT, () => {
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
});