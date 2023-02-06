import { useRef } from "react";
import { useState } from "react";
import { BaseButton, handleSubmit } from "../../Base/Button";
import { BaseFormElement } from "../../Base/FormElement";
const LoginAcc = () => {
  const inputs = [
    {
      id: 1,
      name: "Email",
      type: "email",
    },
    {
      id: 2,
      name: "Password",
      type: "password",
    },
  ];
  const [values, setValues] = useState({
    Email: "",
    Password: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col">
        {inputs.map((input) => (
          <BaseFormElement key={input.id} {...input} onChange={onChange} />
        ))}
        <div className="my-5">
          <BaseButton text="Login" key={"1"} />
        </div>
      </form>
    </div>
  );
};

export default LoginAcc;
