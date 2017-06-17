const initialState = {
  data: [],
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type){
    case 'WATSON_INSIGHT_REQUEST':
      return {
        ...state,
        loading: true
      };
    case 'WATSON_INSIGHT_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case 'WATSON_INSIGHT_FAILURE':
      return {
        ...state,
        loading: false,
        data: action.payload
      };
  }
};