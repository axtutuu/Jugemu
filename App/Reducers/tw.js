const INITIAL_STATE = {
  items: []
};

export default function tw(state=INITIAL_STATE, action) {
  switch(action.type) {
    case 'SET_TW':
      console.log('Reducers', action);
      return { items: action.data };
    default:
      return state;
  }
}
