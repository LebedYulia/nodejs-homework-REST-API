const express = require("express");
const router = express.Router();
const { validation } = require("../../middlewares");
const { joiSchema, joiSchemaForFavorite } = require("../../models/contact");
const { controllers: ctrl } = require("../../controllers");
const {ctrlWrapper} = require("../../helpers");



const validateMiddleware = validation(joiSchema);

router.get("/", ctrlWrapper(ctrl.getAllContacts));

router.get("/:contactId", ctrlWrapper(ctrl.getContactById));

router.post("/", validateMiddleware, ctrlWrapper(ctrl.addContact));

router.delete("/:contactId", ctrlWrapper(ctrl.removeById));

router.put("/:contactId", validateMiddleware, ctrlWrapper(ctrl.updateContact));

router.patch(
  "/:contactId/favorite",
  validation(joiSchemaForFavorite),
  ctrlWrapper(ctrl.updateStatusContact)
);

module.exports = router;
