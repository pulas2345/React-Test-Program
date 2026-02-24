import { RECEIVE_MEMES } from "../actions";

function memes(state = [], action) {
  switch (action.type) {
    case RECEIVE_MEMES:
      return action.memes;
    default:
      return state;
  }
}

export default memes;
