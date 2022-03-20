import React from "react";
import { useOption } from "../zustand/useStore";
import Author from "./Author";
import BookList from "./BookList";

const ShowInfoContainer = () => {
  const Option = useOption();
  return <div>{Option.name === "book" ? <BookList /> : <Author />}</div>;
};

export default ShowInfoContainer;
