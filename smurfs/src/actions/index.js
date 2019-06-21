import axios from "axios";

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

const ENDPOINT_SMURFS = 'http://localhost:3333/smurfs';

export const GET_SMURFS = 'GET_SMURFS';
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS';
export const GET_SMURFS_FAILURE = 'GET_SMURFS_FAILURE';

export const ADD_SMURF = 'ADD_SMURF';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => dispatch => {
  dispatch({
    type: GET_SMURFS
  })
  return axios.get(ENDPOINT_SMURFS)
  .then ( res => {
    console.log(res.data);
    dispatch({
      type: GET_SMURFS_SUCCESS,
      payload: res.data
    })
  })
  .catch( err => {
    console.log(err.response);
    dispatch({
      type: GET_SMURFS_FAILURE,
      payload: err.response.error
    })
  });
}

export const addSmurf = (name, age, height, success) => dispatch => {
  dispatch({
    type: ADD_SMURF
  })
  return axios.post(ENDPOINT_SMURFS, { name, age, height })
  .then ( res => {
    console.log('added successfully');
    success();
    dispatch ({
      type: ADD_SMURF_SUCCESS
    })
  })
  .catch (err => {
    console.log(err.response);
    dispatch ({
      type: ADD_SMURF_FAILURE
    })
  })
}