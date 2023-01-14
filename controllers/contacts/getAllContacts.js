const { getAll } = require("../../service");

const getAllContacts = async (req, res) => {  
  const { _id } = req.user;
  const {page, limit}  = req.query;
  const skip= (page -1)*limit;
  const contacts = await getAll({owner: _id}, '', {skip, limit: +limit});
  res.status(200)
  .json({
    status: 'success',
    code: 200,
    data: {
      result: contacts
    }
    }); 
};

module.exports = getAllContacts;
