import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import categoriasDuck, { getCategoriasAction } from './categoriasDuck';
import thunk from 'redux-thunk';

let rootReducer = combineReducers({
  categorias: categoriasDuck
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

  getCategoriasAction()(store.dispatch, store.getState);

  return store;
}