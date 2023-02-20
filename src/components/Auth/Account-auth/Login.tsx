import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BaseButton } from "../../Base/Button";
import { BaseFormElement } from "../../Base/FormElement";
import {loginAccount} from "../accountSlices";

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
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  console.log(values);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(loginAccount({
      ...values
    }))

  };

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
