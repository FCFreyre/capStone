export const SET_PLAYS = 'SET_PLAYS';
export const ADD_PLAY = 'ADD_PLAY';
export const PLAY_FETCHED = 'PLAY_FETCHED';
export const PLAY_UPDATED = 'PLAY_UPDATED';
export const PLAY_DELETED = 'PLAY_DELETED';

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

export function playUpdated(play) {
  return {
    type: PLAY_UPDATED,
    play
  }
}

export function playDeleted(playId) {
  return {
    type: PLAY_DELETED,
    playId
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
      dispatch(addPlay(data.play))
    });
  }
}

export function updatePlay(data) {
  return dispatch => {
    console.log(data);
    return fetch(`/api/plays/${data._id}`, {
      method: 'put',
      body: JSON.stringify(data),
      headers:{
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
    .then(data => {
      dispatch(playUpdated(data.play))
    });
  }
}

export function deletePlay(id) {
  return dispatch => {
    return fetch(`/api/plays/${id}`, {
      method: 'delete',
      headers:{
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
    .then(data => {
      dispatch(playDeleted(id))
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
