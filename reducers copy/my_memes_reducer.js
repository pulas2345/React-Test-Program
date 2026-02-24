import { NEW_MEME } from "../actions";

function myMemes(state = [], action) {
  switch (action.type) {
    case NEW_MEME:
      let mymemes = [...state, action.meme];
      return mymemes;
    default:
      return state;
  }
}

export default myMemes;
