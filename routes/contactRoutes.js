import express from 'express';
import {
  createContact,
  getContacts,
  getContact,
  updateContact,
  deleteContact,
} from "../controllers/contactController";
import { validateToken } from '../middleware/validateTokenHandler';

//setting up the router
const contactRouter = express.Router();

//Token Validation middleware
contactRouter.use(validateToken);

//routes
contactRouter.get("/", getContacts);

contactRouter.get("/contact/:id", getContact);

contactRouter.post("/add", createContact);

contactRouter.put("/contact/:id", updateContact);

contactRouter.delete("/contact/:id", deleteContact);

export default contactRouter

