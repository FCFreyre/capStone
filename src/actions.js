export const SET_PLAYS = 'SET_PLAYS';

function handleResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export function setPlays(plays) {
  return {
    type: SET_PLAYS,
    plays
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
    }).then(handleResponse);
  }
}

export function fetchPlays() {
  return dispatch => {
    fetch('/api/plays')
    .then(res => res.json())
    .then(data => dispatch(setPlays(data.plays)));
  }
}
