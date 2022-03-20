import Form from "./components/Form";
import SelectContainer from "./components/SelectContainer";
import ShowInfoContainer from "./components/ShowInfoContainer";

const App = () => {
  return (
    <>
      <div className="bg-emerald-500 text-center text-3xl py-3">
        <p className="text-white">GraphQL Project</p>
      </div>
      <div>
        <Form />
      </div>
      <div>
        <SelectContainer />
      </div>
      <div>
        <ShowInfoContainer />
      </div>
    </>
  );
};

export default App;
