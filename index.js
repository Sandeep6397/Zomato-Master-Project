import express  from "express";
import cors from "cors";  //cors origin
import helmet from "helmet"; // for security purpose

const zomato = express();

// application midldeware
zomato.use(express.json());
zomato.use(express.urlencoded({extended: false})); 
zomato.use(helmet());
zomato.use((cors));

zomato.get("/", (req, res) => res.json({message: "Successful"}));
zomato.listen(4000, () => console.log("Server is Running"));