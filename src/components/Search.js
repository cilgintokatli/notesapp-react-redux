import { useState } from "react";
import { useDispatch } from "react-redux";

import { setSearchValue } from "../redux/notes/notesSlice";

export default function Search() {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);

    dispatch(setSearchValue(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search"
      className="search"
      value={value}
      onChange={handleChange}
    />
  );
}
