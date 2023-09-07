// src/reducers/dataReducer.js
const initialState = {
    loading: false,
    error: null,
    type: 0,
    data: []
  };
  
  const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_DATA_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_DATA_SUCCESS':
        return {
          ...state,
          loading: false,
          data: action.payload.data,
          type: action.payload.type,
          error: null,
        };
      case 'FETCH_DATA_FAILURE':
        return {
          ...state,
          loading: false,
          data: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default dataReducer;
  