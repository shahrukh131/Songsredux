import { combineReducers } from "redux";

const initialState = [
  { title: "No Scrubs", duration: "4.05" },
  { title: "Macarena", duration: "2.30" },
  { title: "All Star", duration: "3.15" },
  { title: "I want it that way", duration: "1.45" },
];

const selectedSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SONG_SELECTED":
      return action.payload;

    default:
      return state;
  }
};

export default combineReducers({
  selectedSong: selectedSongReducer,
});
