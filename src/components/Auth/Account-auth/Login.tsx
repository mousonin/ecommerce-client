import styles from "./style.module.scss";
const LoginAcc = () => {
  return (
    <div>
      <form className="flex flex-col">
        <label htmlFor="email" className="mx-1">
          Email
        </label>
        <input
          type="text"
          placeholder="Please input a valid email"
          className="outline-none m-1 px-1 rounded-md border-mateColors-0 border-solid border"
        />
        <label htmlFor="email" className="mx-1">
          Password
        </label>
        <input
          type="text"
          placeholder="Please input a valid password"
          className="outline-none m-1 px-1 rounded-md border-mateColors-0 border-solid border"
        />
        <button
          type="submit"
          className={`flex items-center border rounded-xl w-full justify-center p-1 my-5 bg-mateColors-0 ${styles["submit-btn"]}`}
        >
          <p className="m-1 text-white">Log in</p>
        </button>
      </form>
    </div>
  );
};

export default LoginAcc;
