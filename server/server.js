import express from "express";
import cors from "cors";
import morgan from "morgan";
import connect from "./db/connec.js"
import router from "./router/route.js";



const app = express();
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());
app.disable('x-powered-by');

const port = 8080

app.get("/", (req ,res)=>{
    res.status(201).json("Home GET Request")
})
app.use("/api", router )

// Helps to start server only when there is a valid connection

connect().then(()=>{
    try{
        
        app.listen(port, ()=>{
            console.log(`Server conected to http://localhost:${port}`)
        })
    } catch (error){
        console.log("cannot connect to the server")
    }
}).catch(error=>{
    console.log("Invalid Datbase connectionn ....!")
})

