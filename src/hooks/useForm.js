import { useState } from "react";

export const useForm = (initialValues) => {
  const [form, setForm] = useState(initialValues);

  const onChangeInput = (value, name) => {
    setForm({ ...form, [name]: value });
  };

  return { form, onChangeInput };
};