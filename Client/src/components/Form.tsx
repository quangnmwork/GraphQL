import { SubmitHandler, useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
interface BookInput {
  name: string;
  genre: string;
  authorId: string;
}
interface SaveBookInput {
  name: string;
  genre: string;
  authorId: string;
}

const addBookGQL = gql`
  mutation AddBook($name: String!, $genre: String!, $authorId: String!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      genre
    }
  }
`;

const Form = () => {
  const { register, handleSubmit, getValues } = useForm<BookInput>();
  const [addBook, { error, data }] = useMutation<
    { saveBook: SaveBookInput },
    { name: string; genre: string; authorId: string }
  >(addBookGQL, {
    variables: {
      name: getValues("name"),
      genre: getValues("genre"),
      authorId: getValues("authorId"),
    },
  });
  const submitHandler: SubmitHandler<BookInput> = () => {
    addBook().catch((err) => console.log(err));
  };
  return (
    <div className="mt-10">
      <form className="">
        <div className="flex justify-center">
          <label htmlFor="book">Name book</label>
          <input id="book" className="border-2" {...register("name")} />
        </div>
        <div className="flex justify-center">
          <label htmlFor="genre">Genre</label>
          <input id="genre" className="border-2" {...register("genre")} />
        </div>
        <div className="flex justify-center">
          <label htmlFor="id">Id</label>
          <input id="id" className="border-2" {...register("authorId")} />
        </div>
        <div className="flex justify-center">
          <button
            className="bg-emerald-500"
            onClick={handleSubmit(submitHandler)}
          >
            Add Book
          </button>
        </div>
      </form>
      {error ? <p className="text-center">Oh no! {error.message}</p> : null}
      {data && data.saveBook ? (
        <p className="text-center">Saved Book!</p>
      ) : null}
    </div>
  );
};

export default Form;
