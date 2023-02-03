import { BaseButton } from "../Social-log";
import { BaseFormElement } from "../Social-log";
const LoginAcc = () => {
  const characterBtn = [
    {
      id: 1,
      pText: "Login",
    },
  ];

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
      <form className="flex flex-col">
        {characterFormList.map((character) => (
          <BaseFormElement character={character} key={character.id} />
        ))}
        <div className="my-5">
          <BaseButton text="Login" key={characterBtn[0].id} />
        </div>
      </form>
    </div>
  );
};

export default LoginAcc;
