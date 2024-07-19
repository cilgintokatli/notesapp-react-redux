import { useSelector } from "react-redux";

import { selectFilteredItems } from "../redux/notes/notesSlice";
export default function Notes() {
  const filteredItems = useSelector(selectFilteredItems);

  return (
    <ul className="notes">
      {filteredItems.map((item) => (
        <li style={{ backgroundColor: item.color }} key={item.id}>
          <p>{item.content}</p>
        </li>
      ))}
    </ul>
  );
}
