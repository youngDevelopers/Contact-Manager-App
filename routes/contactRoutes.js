import express from 'express';
import {
  createContact,
  getContacts,
  getContact,
  updateContact,
  deleteContact,
} from "../controllers/contactController";

//setting up the router
const contactRouter = express.Router();

//routes
contactRouter.get("/", getContacts);

contactRouter.get("/contact/:id", getContact);

contactRouter.post("/add", createContact);

contactRouter.put("/contact/:id", updateContact);

contactRouter.delete("/contact/:id", deleteContact);

export default contactRouter

