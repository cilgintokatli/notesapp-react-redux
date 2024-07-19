import { createSelector, createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [
      {
        id: "1",
        content: "learn react",
        color: "blue",
      },
      {
        id: "2",
        content: "read a book",
        color: "green",
      },
    ],
    searchValue: "",
    contentError: "",
    colorError: "",
  },
  reducers: {
    addNote: (state, action) => {
      state.items.push({
        id: state.items.length + 1,
        content: action.payload.content,
        color: action.payload.color,
      });
    },

    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setColorError: (state, action) => {
      state.colorError = action.payload;
    },
    setContentError: (state, action) => {
      state.contentError = action.payload;
    },
  },
});

//selectors
const selectSearchValue = (state) => state.notes.searchValue;

// Selector to get the notes items from the state
const selectNotesItems = (state) => state.notes.items;

// Selector to filter the notes items based on the search input value
export const selectFilteredItems = createSelector(
  selectSearchValue,
  selectNotesItems,
  (searchValue, notesItems) => {
    const searchValueLower = searchValue.toLowerCase();
    return notesItems.filter((item) =>
      item.content.toLowerCase().includes(searchValueLower)
    );
  }
);

export const { addNote, setSearchValue, setColorError, setContentError } =
  notesSlice.actions;

export default notesSlice.reducer;
