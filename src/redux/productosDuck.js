import * as productosService from "../http/productos.services";

let actions = {
  GET_PRODUCTS: "GET_PRODUCTS",
  GET_PRODUCTS_SUCCESS: "GET_PRODUCTS_SUCCESS",
  GET_PRODUCTS_ERROR: "GET_PRODUCTS_ERROR",
  POST_PRODUCT: "POST_PRODUCT",
  POST_PRODUCT_SUCCESS: "POST_PRODUCT_SUCCESS",
  POST_PRODUCT_ERROR: "POST_PRODUCT_ERROR"
}

const producto = {
  _id: "",
  name: "",
  description: "",
  stock: 0,
  state: false,
  categories: []
};

let initialState = {
  productos: [],
  producto: { ...producto },
  loading: false,
  error: ""
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // GET CATEGORIES
    case actions.GET_PRODUCTS:
      return { ...state, loading: true };
    case actions.GET_PRODUCTS_SUCCESS:
      return { ...state, loading: false, productos: [...action.payload] };
    case actions.GET_PRODUCTS_ERROR:
      return { ...state, loading: false, error: action.payload };
    
    // POST CATEGORY
    case actions.POST_PRODUCT:
      return { ...state, loading: true };
    case actions.POST_PRODUCT_SUCCESS:
      return { ...state, loading: false, producto: {...action.payload} };
    case actions.POST_PRODUCT_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}

// Action Creator (Thunk)

export const getProductosAction = () => async (dispatch, getState) => {
  try {

    dispatch({
      type: actions.GET_PRODUCTS
    });
    const responseData = await productosService.getAllProducts();
    const dbProductos = responseData.data.productos;
    dispatch({
      type: actions.GET_PRODUCTS_SUCCESS,
      payload: dbProductos
    });
  } catch (error) {
    dispatch({
      type: actions.GET_PRODUCTS_ERROR,
      payload: error.response.message
    });
  }
};

export const postProductoAction = (producto) => async (dispatch, getState) => {
  try {
    dispatch({
      type: actions.POST_PRODUCT
    });
    const responseData = await productosService.createProduct(producto);
    const dbProducto = responseData.data.producto;
    dispatch({
      type: actions.POST_PRODUCT_SUCCESS,
      payload: dbProducto
    });
    getProductosAction()(dispatch, getState);
  } catch (error) {
    dispatch({
      type: actions.POST_PRODUCT_ERROR,
      payload: error.response.message
    });
  }
};