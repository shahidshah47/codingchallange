// src/actions/dataActions.js
import axios from 'axios';
import api from '../utils/ApiConnection';
export const fetchData = (type) => async (dispatch) => {
  dispatch({ type: 'FETCH_DATA_REQUEST' });
  try {
    axios({
      method: 'get',
      url: `https://jsonplaceholder.typicode.com/`+type,
    }).then((response) => {
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: {data:response.data, type:type=='todos'?0:1} });
    });
   
  } catch (error) {
    dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
  }
};
