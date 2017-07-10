import { SET_PLAYS } from '../actions';

export default function plays(state = [], action = {}) {
  switch (action.type) {
    case SET_PLAYS:
      return action.plays;
    default: return state;

  }
}
