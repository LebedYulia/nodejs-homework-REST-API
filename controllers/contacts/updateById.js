const { Contact } = require("../../models");

const updateById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndUpdate(contactId, req.body);
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

module.exports = updateById;
