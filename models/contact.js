const { Schema, model } = require("mongoose");
const Joi = require("joi");

const contactShema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

const joiSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string()
    .pattern(
      /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
      "Phone number must be digits and can contain spaces, dashes, parentheses"
    )
    .required(),
  favorite: Joi.bool(),
});

const joiSchemaForFavorite = Joi.object({
  favorite: Joi.bool().required({ message: "missing field favorite" }),
});

const Contact = model("contact", contactShema);

module.exports = { Contact, joiSchema, joiSchemaForFavorite };
