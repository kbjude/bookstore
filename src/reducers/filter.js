const initialState = 'All';

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return action.type;
    default: return state;
  }
};
export default filterReducer;
