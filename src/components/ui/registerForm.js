import { validator } from "../../utils/validator";
import { useState, useEffect } from "react";
import TextField from "../common/form/textField";
import api from "../../api";
import SelectField from "../common/form/selectField";
import RadioField from "../common/form/radioField";
import MyltiSelectField from "../common/form/myltiSelectField";

const RegisterForm = () => {
  const [data, setData] = useState({
    email: "",
    pass: "",
    profession: "",
    sex: "male",
    qualities: [],
  });
  const [qualities, setQualities] = useState({});
  const [errors, setErrors] = useState({});
  const [professions, setProfessions] = useState();

  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfessions(data));
    api.qualities.fetchAll().then((data) => setQualities(data));
  }, []);

  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.name]: e.value,
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
    profession: {
      isRequired: {
        message: "Profession dos'n choose! ",
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
      <SelectField
        label="Сhoose our professions"
        defaultOption="Choose..."
        options={professions}
        onChange={handleChange}
        value={data.profession}
        error={errors.profession}
      />
      <RadioField
        options={[
          { name: "Male", value: "male" },
          { name: "Female", value: "female" },
        ]}
        onChange={handleChange}
        value={data.sex}
        name="sex"
      />
      <MyltiSelectField
        onChange={handleChange}
        options={qualities}
        name="qualities"
        label="Сhoose our qualities"
      />

      <button type="submit" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
};

export default RegisterForm;
