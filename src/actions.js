export const SET_PLAYS = 'SET_PLAYS';

export function setPlays(plays) {
  return {
    type: SET_PLAYS,
    plays
  }
}

export function fetchPlays() {
  return dispatch => {
    fetch('/api/plays')
    .then(res => res.json())
    .then(data => dispatch(setPlays(data.plays)));
  }
}
