import React from "react";
import { IBook } from "../IType/IType";

const Book: React.FC<IBook> = ({ id, name, author }) => {
  return (
    <div id={id} className="border-2 border-b-2 w-2/5">
      <p>Bookname:{name}</p>
      <p>Author:{author.name}</p>
    </div>
  );
};

export default Book;
