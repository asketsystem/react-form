const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Define routes
app.use("/api/v1", require("./routes/person.route"));

app.listen(5000, () => console.log("Server is listening on port 5000..."));
