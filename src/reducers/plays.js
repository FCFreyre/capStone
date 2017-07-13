import { SET_PLAYS, ADD_PLAY, PLAY_FETCHED } from '../actions';

export default function plays(state = [], action = {}) {
  switch (action.type) {
    case ADD_PLAY:
      return [
        ...state,
        action.play
      ];

    case PLAY_FETCHED:
      const index = state.findIndex(item => item._id === action.play._id);
      if (index > -1) {
        return state.map(item => {
          if(item._id === action.play._id) return action.play;
          return item;
        })
      } else {
        return [
          ...state,
          action.play
        ]
      }

    case SET_PLAYS:
      return action.plays;
    default: return state;

  }
}
