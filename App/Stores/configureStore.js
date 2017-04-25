import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../Reducers';
import thunk from 'redux-thunk';

const hasExtension = typeof window === "object" && typeof window.devToolsExtension !== "undefined"

export default function configureStore() {
  const middlewares = hasExtension ? compose(applyMiddleware(thunk), window.devToolsExtension())
                                   : compose(applyMiddleware(thunk));
  return createStore(rootReducer, middlewares);
}
