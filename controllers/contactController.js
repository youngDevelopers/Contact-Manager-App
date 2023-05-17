  
//@dec Get all contacts
//@route Get /api/contacts
//@access public
export const getContacts = async (req, res) => {
    return res.status(200).json({ message: "Get all contacts" });
};

//@dec Get all contacts
//@route post /api/contacts/add
//@access public
export const createContact = (req, res) => {
    res.status(200).json({ message: "Create Contact" })
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