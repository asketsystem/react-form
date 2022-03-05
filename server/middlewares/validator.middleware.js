const { body } = require("express-validator");

const validate = (method) => {
  switch (method) {
    case "handlePerson": {
      return [
        body("name")
          .not()
          .isEmpty()
          .withMessage("Name is required")
          .trim()
          .escape(),
        body("age")
          .not()
          .isEmpty()
          .withMessage("Age are required")
          .isNumeric()
          .withMessage("Age must be a numeric value")
          .trim()
          .escape(),
        body("email")
          .not()
          .isEmpty()
          .withMessage("E-mail is required")
          .isEmail()
          .withMessage("Please insert a valid e-mail")
          .normalizeEmail(),
      ];
    }
  }
};

module.exports = { validate };
