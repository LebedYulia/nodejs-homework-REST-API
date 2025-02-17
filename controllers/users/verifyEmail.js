const { User } = require("../../models");
const { RequestError } = require("../../helpers");

const verifyEmail = async (req, res) => {
  const { verificationToken } = req.params;
  const user = await User.findOne({ verificationToken });
  if (!user) {
    throw RequestError(404, "Not Found");
  }
  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationToken: null,
  });
  res.status(200).json({
    status: "success",
    cod: 200,
    data: {
      message: "Verification successful",
    },
  });
};

module.exports = verifyEmail;
