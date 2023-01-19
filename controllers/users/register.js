const bcrypt = require("bcryptjs");
const gravatar = require('gravatar')
const { User } = require("../../models");
const { RequestError } = require("../../helpers");

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw RequestError(409, "Email in use");
  }
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const avatarURL = gravatar.url(email)
  const result = await User.create({ email, password: hashPassword, avatarURL });
  res.status(201).json({
    status: "success",
    cod: 201,
    data: {
      user: {
        email: result.email,
        subscription: result.subscription,
        avatar: result.avatarURL
      },
    },
  });
};

module.exports = register;
