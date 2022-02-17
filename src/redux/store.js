import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import categoriasDuck from './categoriasDuck';
import productosDuck from './productosDuck';
import thunk from 'redux-thunk';

let rootReducer = combineReducers({
  categorias: categoriasDuck,
  productos: productosDuck
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

  return store;
}