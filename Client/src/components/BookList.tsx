import { gql, useQuery } from "@apollo/client";
import Book from "./Book";
import { IBook } from "../IType/IType";

const graphQLQuery = gql`
  {
    books {
      id
      name
      genre
      author {
        name
        id
      }
    }
  }
`;

const BookList: React.FC<{}> = () => {
  const { loading, error, data } = useQuery(graphQLQuery);
  if (loading) {
    return <p> loading</p>;
  } else if (error) {
    console.log(error);
    return <p className="text-center">There is an error</p>;
  }
  console.log(data);
  return (
    <div className="flex flex-col items-center mt-5 relative -z-10">
      {data.books.map((book: IBook) => (
        <Book
          id={book.id}
          name={book.name}
          author={book.author}
          key={book.id}
        />
      ))}
    </div>
  );
};

export default BookList;
