import React, { useEffect, useState } from "react";
import TextField from "../components/textField";
import { validator } from "../utils/validator";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const validatorConfig = {
    email: {
      isRequired: { message: "Электронная почта обязательна для заполнения" },
      isEmail: { message: "Email введён некорректно" },
    },
    password: {
      isRequired: { message: "Пароль обязателен для заполнения" },
      isCapital: {
        message: "Пароль должен содержать хотя бы одну заглавную букву",
      },
      isContainDigit: { message: "Пароль должен содержать хотя бы одно число" },
      min: {
        message: "Пароль должен состоять минимум из 8 символов",
        value: 8,
      },
    },
  };
  const validate = () => {
    const error = validator(data, validatorConfig);
    setErrors(error);
    return Object.keys(errors).length === 0;
  };
  const isValide = Object.keys(errors).length === 0;
  useEffect(() => {
    validate();
  }, [data]);
  const changeHandler = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const submitHandle = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    console.log(data);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          <h3 className="mb-4">Login</h3>
          <form onSubmit={submitHandle} action="">
            <TextField
              label="Email:"
              name="email"
              value={data.email}
              error={errors.email}
              handler={changeHandler}
            />
            <TextField
              label="Пароль:"
              type="password"
              name="password"
              value={data.password}
              error={errors.password}
              handler={changeHandler}
            />
            <button
              disabled={!isValide}
              className="btn btn-primary w-100 mx-auto"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
