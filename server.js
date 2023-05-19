import express, { response } from 'express';
import {} from "dotenv/config";
import contactRouter from "./routes/contactRoutes";
import { errorHandler } from './middleware/errorHandle';

const app = express();


//setting up the port
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

//middleware
app.use(express.json());//using middleware wc provides a parser wc helps to pass the data stream that we receive from client to the server
app.use(errorHandler);//custom made middlewares


//Routes
app.use("/api/contacts", contactRouter );


