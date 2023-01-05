const { removeContact } = require("../../models/contacts");

const removeById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await removeContact(contactId);
    if (!result) {
      return res
        .status(404)
        .json({ error: `Contact with ID = ${contactId} does not exist` });
    }
    res.status(200).json({ message: "contact deleted", result });
  } catch (error) {
    next(error);
  }
};

module.exports = removeById;
