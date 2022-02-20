import * as productosService from "../http/productos.services";

let actions = {
  GET_PRODUCTS: "GET_PRODUCTS",
  GET_PRODUCTS_SUCCESS: "GET_PRODUCTS_SUCCESS",
  GET_PRODUCTS_ERROR: "GET_PRODUCTS_ERROR",
  
  POST_PRODUCT: "POST_PRODUCT",
  POST_PRODUCT_SUCCESS: "POST_PRODUCT_SUCCESS",
  POST_PRODUCT_ERROR: "POST_PRODUCT_ERROR",

  PUT_PRODUCT: "PUT_PRODUCT",
  PUT_PRODUCT_SUCCESS: "PUT_PRODUCT_SUCCESS",
  PUT_PRODUCT_ERROR: "PUT_PRODUCT_ERROR",

  GET_PRODUCT: "GET_PRODUCT",
  GET_PRODUCT_SUCCESS: "GET_PRODUCT_SUCCESS",
  GET_PRODUCT_ERROR: "GET_PRODUCT_ERROR",

  POST_PRODUCT_PRECIO: "POST_PRODUCT_PRECIO",
  POST_PRODUCT_PRECIO_SUCCESS: "POST_PRODUCT_PRECIO_SUCCESS",
  POST_PRODUCT_PRECIO_ERROR: "POST_PRODUCT_PRECIO_ERROR"
};

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
    // GET PRODUCTS
    case actions.GET_PRODUCTS:
      return { ...state, loading: true };
    case actions.GET_PRODUCTS_SUCCESS:
      return { ...state, loading: false, productos: [...action.payload] };
    case actions.GET_PRODUCTS_ERROR:
      return { ...state, loading: false, error: action.payload };

    // GET PRODUCT
    case actions.GET_PRODUCT:
      return { ...state, loading: true };
    case actions.GET_PRODUCT_SUCCESS:
      return { ...state, loading: false, producto: {...action.payload} };
    case actions.GET_PRODUCT_ERROR:
      return { ...state, loading: false, error: action.payload };

    // POST PRODUCT
    case actions.POST_PRODUCT:
      return { ...state, loading: true };
    case actions.POST_PRODUCT_SUCCESS:
      return { ...state, loading: false, producto: { ...action.payload } };
    case actions.POST_PRODUCT_ERROR:
      return { ...state, loading: false, error: action.payload };

    // POST PRODUCT
    case actions.PUT_PRODUCT:
      return { ...state, loading: true };
    case actions.PUT_PRODUCT_SUCCESS:
      return { ...state, loading: false, producto: { ...action.payload } };
    case actions.PUT_PRODUCT_ERROR:
      return { ...state, loading: false, error: action.payload };

    // POST PRODUCT PRICE
    case actions.POST_PRODUCT_PRECIO:
      return { ...state, loading: true };
    case actions.POST_PRODUCT_PRECIO_SUCCESS:
      return { ...state, loading: false, producto: { ...action.payload } };
    case actions.POST_PRODUCT_PRECIO_ERROR:
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

export const getProductoAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: actions.GET_PRODUCT
    });
    const responseData = await productosService.getProduct(id);
    const dbProducto = responseData.data.producto;
    dispatch({
      type: actions.GET_PRODUCT_SUCCESS,
      payload: dbProducto
    });
  } catch (error) {
    dispatch({
      type: actions.GET_PRODUCT_ERROR,
      payload: error?.response?.message
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

export const putProductoAction = (productoId, productoInfo) => async (dispatch, getState) => {
  try {
    dispatch({
      type: actions.PUT_PRODUCT
    });
    const responseData = await productosService.updateProduct(productoId, productoInfo);
    const dbProducto = responseData.data.producto;
    dispatch({
      type: actions.PUT_PRODUCT_SUCCESS,
      payload: dbProducto
    });
  } catch (error) {
    dispatch({
      type: actions.PUT_PRODUCT_ERROR,
      payload: error.response.message
    });
  }
};

export const addProductoPrecioAction = (productoId, precioInfo) => async (dispatch, getStore) => {
  try {
    dispatch({
      type: actions.POST_PRODUCT_PRECIO
    });

    console.log("productoId", productoId);
    console.log("precioInfo", precioInfo);

    const responseData = await productosService.addProductPrice(productoId, precioInfo);
    const dbProducto = responseData.data.producto;
    dispatch({
      type: actions.POST_PRODUCT_PRECIO_SUCCESS,
      payload: dbProducto
    });
  } catch (error) {
    dispatch({
      type: actions.POST_PRODUCT_PRECIO_ERROR,
      payload: error.response.message
    });
  }
};