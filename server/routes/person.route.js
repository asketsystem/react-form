const express = require("express");
const router = express.Router();

const { handlePerson } = require("../controllers/person.controller");

const { validate } = require("../middlewares/validator.middleware");

router.post("/peraon", validate("handlePerson"), handlePerson);

module.exports = router;
