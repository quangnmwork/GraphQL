import { gql, useQuery } from "@apollo/client";
import { IAuthor } from "../IType/IType";
const graphQLQuery = gql`
  {
    authors {
      name
      age
      id
    }
  }
`;

const Author = () => {
  const { loading, error, data } = useQuery(graphQLQuery);
  if (loading) {
    return <p>Loading.....</p>;
  }
  if (error) {
    return <p>There is an error in Author</p>;
  }

  return (
    <div>
      <div className="flex flex-col items-center mt-5 relative -z-10">
        {data.authors.map((author: IAuthor) => (
          <div
            id={author.id}
            className="border-2 border-b-2 w-2/5"
            key={author.id}
          >
            {author.name},Age:{author.age}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Author;
