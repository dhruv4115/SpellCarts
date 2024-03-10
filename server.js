import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';


//config env
dotenv.config();


//rest object

const app = express();

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