import express, { response } from 'express';
import {} from "dotenv/config";
import contactRouter from "./routes/contactRoutes";
import { errorHandler } from './middleware/errorHandle';
import { connectDB, dbConnect } from './config/databaseConnection';
import userRouter from './routes/userRoutes';

//Database connection
// dbConnect();
connectDB();


//Setting up routes middleware
const app = express();

//middleware
app.use(express.json());//using middleware wc provides a parser wc helps to pass the data stream that we receive from client to the server



//setting up the port
const port = process.env.PORT || 5000;

//Routes
app.use("/api/contacts", contactRouter );
app.use("/api/users", userRouter );
app.use(errorHandler);//custom made middlewares 


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});






