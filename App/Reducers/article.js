const INITIAL_STATE = {
  items: []
};

export default function article(state=INITIAL_STATE, action) {
  switch(action.type) {
    case 'SET_ARTICLES':
      return { items: action.data };
    default:
      return state;
  }
}
