import { useState } from "react";
import { redirect } from "react-router-dom";
import { BaseButton, handleSubmit } from "../../Base/Button";
import { BaseFormElement } from "../../Base/FormElement";
const inputs = [
  {
    id: 1,
    name: "fullName",
    type: "text",
    errorMessage: "This full name must be 5+ characters long",
  },
  {
    id: 2,
    name: "email",
    type: "email",
    errorMessage: "Email is invalid",
  },
  {
    id: 3,
    name: "password",
    type: "password",
    errorMessage: "Password is not strong",
  },
];

const RegisterAcc = () => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  async function login() {
    fetch("http://localhost:3001/users/register", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => redirect("/users"));
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col">
        {inputs.map((input) => (
          <BaseFormElement key={input.id} {...input} onChange={onChange} />
        ))}
        <div className="my-5">
          <BaseButton text="Login" key={"1"} onClick={login} />
        </div>
      </form>
    </div>
  );
};

export default RegisterAcc;
