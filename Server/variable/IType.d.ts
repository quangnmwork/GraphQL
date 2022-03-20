declare namespace IType {
  interface Author {
    id: string;
    name: string;
    age: number;
  }
  interface Book {
    id: string;
    genre: string;
    name: string;
  }
  export = Author;
  export = Book;
}

export = IType;
