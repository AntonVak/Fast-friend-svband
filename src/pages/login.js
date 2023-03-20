import { useState, useEffect } from "react";
import TextField from "../components/Forms/textField";
import { validator } from "../utils/validator";

const Login = () => {
  const [data, setData] = useState({ email: "", pass: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

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
  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const isValid = Object.keys(errors).length === 0;
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    // console.log(data)
  };
  return (
    <div className="container mt-5">
      <div className="row">
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
      </div>
    </div>
  );
};

export default Login;
