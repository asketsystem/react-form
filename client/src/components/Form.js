import { useState } from "react";
import axios from "axios";

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

  return <div></div>;
};
