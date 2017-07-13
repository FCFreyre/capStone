export const SET_PLAYS = 'SET_PLAYS';
export const ADD_PLAY = 'ADD_PLAY';
export const PLAY_FETCHED = 'PLAY_FETCHED';

function handleResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export function addPlay(play) {
  return {
    type: ADD_PLAY,
    play
  }
}

export function setPlays(plays) {
  return {
    type: SET_PLAYS,
    plays
  }
}

export function playFetched(play) {
  return {
    type: PLAY_FETCHED,
    play
  }
}

export function savePlay(data) {
  return dispatch => {
    return fetch('/api/plays', {
      method: 'post',
      body: JSON.stringify(data),
      headers:{
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
    .then(data => {
      dispatch(addPlay(data.plays))
    });
  }
}

export function fetchPlays() {
  return dispatch => {
    fetch('/api/plays')
    .then(res => res.json())
    .then(data => dispatch(setPlays(data.plays)));
  }
}

export function fetchPlay(id) {
  return dispatch => {
    fetch(`/api/plays/${id}`)
    .then(res => res.json())
    .then(data => dispatch(playFetched(data.play)));
  }
}
