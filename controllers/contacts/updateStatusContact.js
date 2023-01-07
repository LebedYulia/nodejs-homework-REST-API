const { Contact } = require("../../models");

const updateStatusContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const { favorite } = req.body;    
   
    const result = await Contact.findByIdAndUpdate(
      contactId,
      { favorite },      
    );  
   
    if (!result) {
      return res
        .status(404)
        .json({ error: `Contact with ID = ${contactId} does not exist` });
    }
    res.json(result);
  } catch (error) {   
    next(error);
  }
};

module.exports = updateStatusContact;
