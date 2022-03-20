export interface IBook {
  name: string;
  id: string;
  author: IAuthor;
  getBooks?: () => Promise<void>;
}
export interface IAuthor {
  name: string;
  age: number;
  id: string;
  books: IBook[];
}

export interface IOption {
  name: string;
  switch: (switchValue: string) => void;
}
