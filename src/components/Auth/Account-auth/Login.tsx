import { log } from "console";
import { useRef } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { redirect, useNavigate } from "react-router-dom";
import { BaseButton, handleSubmit } from "../../Base/Button";
import { BaseFormElement } from "../../Base/FormElement";

const inputs = [
  {
    id: 1,
    name: "email",
    type: "email",
  },
  {
    id: 2,
    name: "password",
    type: "password",
  },
];
const LoginAcc = () => {
  const userList = useSelector((state: any) => state.user.list);
  console.log(userList);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  console.log(values);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  async function login(params: any) {
    fetch("http://localhost:3001/users/login", {
      method: "POST",
      body: JSON.stringify(params),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .then(() => redirect("/user"));
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col">
        {inputs.map((input) => (
          <BaseFormElement key={input.id} {...input} onChange={onChange} />
        ))}
        <div className="my-5">
          <BaseButton text="Login" key={"1"} onClick={() => login(values)} />
        </div>
      </form>
    </div>
  );
};

export default LoginAcc;
