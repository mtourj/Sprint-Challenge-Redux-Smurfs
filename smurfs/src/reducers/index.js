/*
  Be sure to import in all of the action types from `../actions`
*/
import * as actions from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const initialState = {
  smurfs: [],
  fetching: false,
  adding: false,
  updating: false,
  deleting: false,
  error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const reducer = (state = initialState, action) => {
  switch (action.type){
    case actions.GET_SMURFS:
      return {
        ...state,
        fetching: true,
        error: null
      }
    case actions.GET_SMURFS_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        smurfs: action.payload
      }
    case actions.GET_SMURFS_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export default reducer;