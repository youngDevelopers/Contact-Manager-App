import asyncHandler from "express-async-handler";
import Contact from "../models/Contact";
//@dec Get all contacts
//@route Get /api/contacts
//@access private
export const getContacts = asyncHandler( async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id });
  return res.status(200).json(contacts);
});

//@dec Get all contacts
//@route post /api/contacts/add
//@access private
export const createContact = asyncHandler(async (req, res) => {
  //console.log(`The request body is ${req.body}`);
  const { name, email, phone } = req.body; //pbject destructuring
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory!!!");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
    user_id: user.req.id,
  })
  res.status(200).json(contact);
});

//private
export const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if(!contact){
    res.status(404);
    throw new Error("Contact not found");
  }

  //Check if user is allowed to view this contact
  if(contact.user_id.toString() !== req.user.id){
    res.status(403);
    throw new Error("Unauthorized to view contact");
  } else{
    res.status(200).json(contact);
  }
});


//private
export const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if(!contact){
    res.status(404)
    throw new Error("Contact not Found")
  }

  if(contact.user_id.toString() !== req.user.id){
    res.status(403);
    throw new Error("User dont have permission to update other user contacts");
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new:true }
  );
  res.status(200).json(updatedContact);
});


//private
export const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  //Validating if the user is allowed to delete the Contact
  if(contact.user_id.toString() !== req.user.id){
    res.status(403);
    throw new Error("User don't have permission to delete other users contacts");
  }
  await Contact.deleteOne({ _id: req.params.id})
  res.status(200).json(contact);
});
