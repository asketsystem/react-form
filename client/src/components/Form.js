import { useState } from "react";

export const Form = () => {
  const initialFormData = {
    name: "",
    age: "",
    email: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formSuccess, setFormSuccess] = useState();
  const [formErrors, setFormErrors] = useState([]);

  return <div></div>;
};
