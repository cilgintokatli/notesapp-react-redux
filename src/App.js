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
      </div>
    </div>
  );
}

export default App;
