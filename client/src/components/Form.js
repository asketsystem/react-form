import { useState } from "react";
import axios from "axios";
import { AlertError } from "./views/AlertError";
import { AlertSuccess } from "./views/AlertSuccess";

export const Form = () => {
  const initialFormData = {
    name: "",
    age: "",
    email: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formSuccess, setFormSuccess] = useState();
  const [formErrors, setFormErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send POST request
      await axios.post("https://locahost:5000/api/v1/person", formData);

      // HTTP req successful
      setFormSuccess("Data received correctly");

      // Reset form data
      setFormData(initialFormData);
    } catch (err) {
      handleErrors(err);
    }
  };

  const handleErrors = (err) => {
    if (err.response.data && err.response.data.errors) {
      // Handle validation errors
      const { erros } = err.response.data;

      let errMsg = [];
      for (let error of erros) {
        const { msg } = error;

        errorMsg.push(msg);
      }

      setFormErrors(errorMsg);
    } else {
      // Handle generic error
      setFormErrors(["Oops, there was an error"]);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setFormErrors([]);
    setFormSuccess("");
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} className="form">
          <h1>React form</h1>
          <AlertSuccess success={formSuccess} />
          <AlertError errors={formErrors} />
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="input"
              value={formData.name}
              onInput={handleChange}
            />
          </div>
          <div>
            <label>Age</label>
            <input
              type="number"
              name="age"
              className="input"
              value={formData.age}
              onInput={handleChange}
            />
          </div>
          <div>
            <label>E-mail</label>
            <input
              type="email"
              name="email"
              className="input"
              value={formData.email}
              onInput={handleChange}
            />
          </div>
          <input type="submit" className="button" value="Submit" />
        </form>
      </div>
    </div>
  );
};
