import React from "react";
import { useOption } from "../zustand/useStore";

const SelectBox: React.FC<{}> = () => {
  const Option = useOption();
  const handlerSwitch = (e: React.ChangeEvent<HTMLSelectElement>) => {
    Option.switch(e.target.value);
  };
  return (
    <select onChange={handlerSwitch} defaultValue={"book"}>
      <option value={"book"}>Book</option>
      <option value={"author"}>Author</option>
    </select>
  );
};

export default SelectBox;
