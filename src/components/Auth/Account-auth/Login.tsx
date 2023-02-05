import { BaseButton, handleSubmit, login } from "../../Base/Button";
import { BaseFormElement } from "../../Base/FormElement";
const LoginAcc = () => {
  const characterFormList = [
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
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col">
        {characterFormList.map((character) => (
          <BaseFormElement character={character} key={character.id} />
        ))}
        <div className="my-5">
          <BaseButton text="Login" key={"1"} onClick={login}/>
        </div>
      </form>
    </div>
  );
};

export default LoginAcc;
