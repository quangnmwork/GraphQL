import { SubmitHandler, useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
interface BookInput {
  name: string;
  genre: string;
  authorId: string;
}

const addBookGQL = gql`
  mutation {
    addBook($book : BookInput!) {
      name
      genre
    }
  }
`;

const Form = () => {
  const { register, handleSubmit } = useForm<BookInput>();
  //   const mutation = useMutation<{bookInput:BookInput}>()
  const submitHandler: SubmitHandler<BookInput> = (data) => {};
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
    </div>
  );
};

export default Form;
