const express = require("express");
const router = express.Router();
const  validation = require("../../middlewares");
const { contactSchema } = require("../../schemes");
const { contacts: controller } = require("../../controllers");


const validateMiddleware = validation(contactSchema);

router.get("/", controller.getAll);

router.get("/:contactId", controller.getById);

router.post("/", validateMiddleware, controller.add);

router.delete("/:contactId", controller.removeById);

router.put("/:contactId", validateMiddleware, controller.updateById);

module.exports = router;
