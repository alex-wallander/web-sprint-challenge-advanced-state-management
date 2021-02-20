import axios from 'axios';

export const SMURF_FETCH = 'SMURF_FETCH';
export const SMURF_FETCH_SUCCESS = 'SMURF_FETCH_SUCCESS';
export const SMURF_FETCH_FAIL = 'SMURF_FETCH_FAIL';
export const ADD_SMURF = 'ADD_SMURF';
export const ERROR_VALUE = 'ERROR_VALUE';

export const fetchSmurfs = () => {
    return dispatch => {
        dispatch({ type:SMURF_FETCH});

        axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res);
            dispatch({type: SMURF_FETCH_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err);
            dispatch({type: SMURF_FETCH_FAIL, payload: err.message})
        })
    }
}

export const addSmurf = (smurf) => {
    return({
        type: ADD_SMURF,
        payload: smurf
    })
}

export const errorValue = (error) => {
    return({
        type: ERROR_VALUE,
        payload: error
    })
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.