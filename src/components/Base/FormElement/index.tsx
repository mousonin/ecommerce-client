import { useState } from "react";

export const BaseFormElement = (props: any) => {
  const [values, setValues] = useState("");
    return (
      <>
        <label htmlFor="" className="m-1">
          {props.character.name}
        </label>
        <input
          onChange={(e) => setValues(e.target.value)}
          type={props.character.type}
          placeholder={`Please input a valid ${props.character.name}`}
          className="outline-none m-1 px-1 rounded-md border-mateColors-0 border-solid border"
        />
      </>
    );
  };