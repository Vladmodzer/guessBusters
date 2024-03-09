const initialState = {};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_PROPS':
      return action.payload;
    default:
      return state;
  }
};

export default reducer;