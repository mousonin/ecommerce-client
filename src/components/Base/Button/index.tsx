import styles from "./style.module.scss";
type TProps = {
  onClick?: () => void;
  text: string;
  icon?: JSX.Element;
};

export const BaseButton = ({ onClick, text, icon }: TProps) => {
  return (
    <button
      className={`flex items-center border rounded-xl w-full justify-center p-1 my-1 bg-mateColors-0 ${styles["social-log"]}`}
      onClick={onClick}
    >
      <p className="m-1 text-white">{text}</p>
      {icon}
    </button>
  );
};

export const handleSubmit = (e: any) => {
  e.preventDefault();
};
