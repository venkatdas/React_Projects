import { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);
  // console.log(people);
  return (
    <main>
      <section className="container">
        <h3>{people.length} Total Length</h3>
        <List randomName={people} />
        <button
          type="button"
          className="btn btn-block"
          onClick={() => setPeople([])}
        >
          ClearALL
        </button>
      </section>
    </main>
  );
};
export default App;
