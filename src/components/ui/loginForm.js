import { validator } from "../../utils/validator";
import { useState, useEffect } from "react";
import TextField from "../common/form/textField";
import { object, string, number, date, InferType } from 'yup';

const LoginForm = () => {
  const [data, setData] = useState({ email: "", pass: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // let userSchema = object({
  //   email: string().required("Почта обязательна для заполнения").email("E-mail not correct"),
  //   pass: string().required("Пароль обязателен для заполнения"),
  //   name: string().required(),
  //   age: number().required().positive().integer(),
    
  //   website: string().url().nullable(),
  //   createdOn: date().default(() => new Date()),
  // });

  const validatorConfig = {
    email: {
      isRequired: {
        message: "Почта обязательна для заполнения",
      },
      isMail: {
        message: "E-mail not correct",
      },
    },
    pass: {
      isRequired: {
        message: "Пароль обязателен для заполнения",
      },
      isCapitalSymbol: {
        message: "Должна быть одна заглаваная буква",
      },
      isDigitSymbol: {
        message: "Должна быть одна цифра",
      },
      min: {
        message: "Пароль должен состоять из 8 символов",
        value: 8,
      },
    },
  };

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  useEffect(() => {
    validate();
  }, [data]);

  const isValid = Object.keys(errors).length === 0;
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    // console.log(data)
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        type="text"
        label="E-mail"
        name="email"
        value={data.email}
        onChange={handleChange}
        error={errors.email}
      />
      <TextField
        type="password"
        label="Password"
        name="pass"
        value={data.password}
        onChange={handleChange}
        autoComplete="current-password"
        error={errors.pass}
      />
      <button type="submit" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
