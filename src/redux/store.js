import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import categoriasDuck from './categoriasDuck';
import thunk from 'redux-thunk';

let rootReducer = combineReducers({
  categorias: categoriasDuck
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

  return store;
}