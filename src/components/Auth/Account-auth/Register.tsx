import { BaseButton, handleSubmit } from "../../Base/Button";
import { BaseFormElement } from "../../Base/FormElement";
const LoginAcc = () => {
  const characterFormList = [
    {
      id: 1,
      name: "Full Name",
      type: "text",
    },
    {
      id: 2,
      name: "Email",
      type: "email",
    },
    {
      id: 3,
      name: "Password",
      type: "password",
    },
  ];
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col">
        {characterFormList.map((character) => (
          <BaseFormElement character={character} key={character.id} />
        ))}
        <div className="my-5">
          <BaseButton text="Login" key={"1"} />
        </div>
      </form>
    </div>
  );
};

export default LoginAcc;
