import express, { response } from 'express';
import {} from "dotenv/config";
import contactRouter from "./routes/contactRoutes";

const app = express();
app.use(express.json());

//setting up the port
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

//Routes
app.use("/api/contacts", contactRouter );

