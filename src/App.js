import "./App.css";

import Search from "./components/Search";
import AddNote from "./components/AddNote";
import Notes from "./components/Notes";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Notes App</h1>
        <Search />
        <AddNote />
        <Notes />
        <p style={{ textAlign: "center", color: "gray" }}>
          made by{" "}
          <a
            href="https://github.com/cilgintokatli"
            style={{ color: "#9b9b9b" }}
          >
            okan şahin
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
