import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";

import {
  addNote as addNewNote,
  setContentError,
  setColorError,
} from "../redux/notes/notesSlice";

export default function AddNote() {
  const [color, setColor] = useState();
  const [content, setContent] = useState("");

  const colorError = useSelector((state) => state.notes.colorError);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!content) {
      dispatch(setContentError("Bu alan boş bırakılamaz"));
      return false;
    }
    if (!color) {
      return dispatch(setColorError("Renk seçiniz"));
    }

    dispatch(addNewNote({ content, color }));

    setContent("");
    setColor(null);

    dispatch(setContentError(""));
    dispatch(setColorError(""));
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Add a new note"
        value={content}
        name="content"
        onChange={(e) => setContent(e.target.value)}
      />
      {colorError && <div className="error-message">{colorError}</div>}

      <div className="footer">
        <div className="colors">
          <div>
            <input
              type="radio"
              name="color"
              value="pink"
              id="pink"
              checked={color === "pink"}
              onChange={handleChange}
            />
            <label htmlFor="pink"></label>
          </div>
          <div>
            <input
              type="radio"
              name="color"
              value="purple"
              id="purple"
              checked={color === "purple"}
              onChange={handleChange}
            />
            <label htmlFor="purple"></label>
          </div>

          <div>
            <input
              type="radio"
              name="color"
              value="yellow"
              id="yellow"
              checked={color === "yellow"}
              onChange={handleChange}
            />
            <label htmlFor="yellow"></label>
          </div>

          <div>
            <input
              type="radio"
              name="color"
              value="blue"
              id="blue"
              checked={color === "blue"}
              onChange={handleChange}
            />
            <label htmlFor="blue"></label>
          </div>

          <div>
            <input
              type="radio"
              name="color"
              value="green"
              id="green"
              checked={color === "green"}
              onChange={handleChange}
            />
            <label htmlFor="green"></label>
          </div>
        </div>

        <button>Add</button>
      </div>
    </form>
  );
}
