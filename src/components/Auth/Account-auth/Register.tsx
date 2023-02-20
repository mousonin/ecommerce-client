import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BaseButton, handleSubmit } from "../../Base/Button";
import { BaseFormElement } from "../../Base/FormElement";
import { registerAccount } from "../accountSlices";
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values: any) => {
    return new Promise ((resolve) => {
      setTimeout(() => {
        dispatch(registerAccount(values));
        navigate("/");
        resolve(true);
      },1000)
    })
  }
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values)
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
      .then(() => handleSubmit(values));
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

