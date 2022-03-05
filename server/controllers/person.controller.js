const { validationResult } = require("express-validator");

const handlePerson = (req, res) => {
  const erros = validationResult(req);
  if (!erros.isEmpty()) {
    // Validation erros
    return res.status(400).json({ erros: erros.array() });
  }

  const { name, age, email } = req.body;

  // Handle the data...

  res.status(200).json({ message: "The server received the data" });
};

module.exports = { handlePerson };
