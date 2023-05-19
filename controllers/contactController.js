  
//@dec Get all contacts
//@route Get /api/contacts
//@access public
export const getContacts = async (req, res) => {
    return res.status(200).json({ message: "Get all contacts" });
};

//@dec Get all contacts
//@route post /api/contacts/add
//@access public
export const createContact = async (req, res) => {
  console.log(`The request body is ${req.body}`);
  const {name, email, phone} = req.body; //pbject destructuring
  if(!name || !email || !phone){
    res.status(400);
    throw new Error("All fields are mandatory!!!")
  }
  res.status(200).json({ message: "Create Contact" });
}

export const getContact = async (req, res) => {
  res.status(200).json({ message: `Fetch/Get Contact for ${req.params.id}` });
};

export const updateContact = async (req, res) => {
  res.status(200).json({ message: `Update Contact for ${req.params.id}` });
};

export const deleteContact = async (req, res) => {
  res.status(200).json({ message: `Delete Contact for ${req.params.id}` });
};