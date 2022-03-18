import { getAllSales, getSale, registerSale } from "../services/ventas.service";
import { getDate } from "../utils/dates.utility";

const actions = {
  GET_SALES: "GET_SALES",
  GET_SALES_SUCCESS: "GET_SALES_SUCCESS",
  GET_SALES_ERROR: "GET_SALES_ERROR",

  GET_SALE: "GET_SALE",
  GET_SALE_SUCCESS: "GET_SALE_SUCCESS",
  GET_SALE_ERROR: "GET_SALE_ERROR",

  POST_SALE: "POST_SALE",
  POST_SALE_SUCCESS: "POST_SALE_SUCCESS",
  POST_SALE_ERROR: "POST_SALE_ERROR",

  UPDATE_PRODUCTS_SALE: "UPDATE_PRODUCTS_SALE",
  REGISTER_PAYMENT: "REGISTER_PAYMENT",
  UPDATE_TOTAL: "UPDATE_TOTAL"
}

const venta = {
  date: getDate(),
  total: 117.5,
  paid: true,
  client: null,
  soldProducts: [],
  payments: []
}

const productoVendido = {
  product: {
    _id: "6211d41d22832d72961fa386"
  },
  price: {
    _id: "62120c843b80297fea7e5d09"
  },
  amount: 5,
  total: 117.5
}

const pago = {
  amount: 117.5,
  date: "2021-12-09",
  type: "TOTAL_PAYMENT"
}

let initialState = {
  ventas: [],
  venta: { ...venta },
  productosVendidos: [],
  pagos: [],
  loading: false,
  error: ""
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.UPDATE_PRODUCTS_SALE:
      return { ...state, productosVendidos: [...action.payload] };

    case actions.REGISTER_PAYMENT:
      return { ...state, pagos: [...action.payload] };

    case actions.UPDATE_TOTAL:
      return { ...state, venta: { ...action.payload } };

    // API
    case actions.POST_SALE:
      return { ...state, loading: true };
    case actions.POST_SALE_SUCCESS:
      return { ...state, loading: false, venta: { ...action.payload } };
    case actions.POST_SALE_ERROR:
      return { ...state, loading: false, error: action.payload };

    case actions.GET_SALE:
      return { ...state, loading: true };
    case actions.GET_SALE_SUCCESS:
      return { ...state, loading: false, venta: { ...action.payload } };
    case actions.GET_SALE_ERROR:
      return { ...state, loading: false, error: action.payload };

    case actions.GET_SALES:
      return { ...state, loading: true };
    case actions.GET_SALES_SUCCESS:
      return { ...state, loading: false, ventas: [...action.payload] };
    case actions.GET_SALES_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}

// Action Creator (Thunk)
export const addProductSaleAction = (productInfo) => {
  return (dispatch, getStore) => {
    const { productosVendidos } = getStore().ventas;
    const productsCopy = [...productosVendidos];

    const newProductoVendido = {
      product: {
        _id: productInfo._id,
        name: productInfo.name,
        img: productInfo.img,
        stock: productInfo.stock
      },
      price: {
        ...productInfo.currentPrice
      },
      amount: 1,
      total: productInfo.currentPrice.amount
    }

    productsCopy.push(newProductoVendido);

    dispatch({
      type: actions.UPDATE_PRODUCTS_SALE,
      payload: productsCopy
    });

    dispatch(calculateTotalSaleAction());
  };
};

export const removeProductSaleAction = (productId) => {
  return (dispatch, getStore) => {
    const { productosVendidos } = getStore().ventas;
    const productsCopy = [...productosVendidos];

    const productIndex = productsCopy.findIndex((productoVendido) => productoVendido.product._id === productId);

    if (productIndex === -1) {
      return;
    }

    productsCopy.splice(productIndex, 1);

    dispatch({
      type: actions.UPDATE_PRODUCTS_SALE,
      payload: productsCopy
    });

    dispatch(calculateTotalSaleAction());
  };
};

export const increaseQuantityProductAction = (productId) => {
  return (dispatch, getStore) => {
    const { productosVendidos } = getStore().ventas;
    const productsCopy = [...productosVendidos];

    const productIndex = productsCopy.findIndex((productoVendido) => productoVendido.product._id === productId);

    if (productIndex === -1) {
      return;
    }

    productsCopy[productIndex].amount += 1;
    productsCopy[productIndex].total = Number(productsCopy[productIndex].amount) * Number(productsCopy[productIndex].price.amount);

    dispatch({
      type: actions.UPDATE_PRODUCTS_SALE,
      payload: productsCopy
    });

    dispatch(calculateTotalSaleAction());
  };
};

export const decreaseQuantityProductAction = (productId) => {
  return (dispatch, getStore) => {
    const { productosVendidos } = getStore().ventas;
    const productsCopy = [...productosVendidos];

    const productIndex = productsCopy.findIndex((productoVendido) => productoVendido.product._id === productId);

    if (productIndex === -1) {
      return;
    }

    productsCopy[productIndex].amount -= 1;
    productsCopy[productIndex].total = Number(productsCopy[productIndex].amount) * Number(productsCopy[productIndex].price.amount);

    dispatch({
      type: actions.UPDATE_PRODUCTS_SALE,
      payload: productsCopy
    });

    dispatch(calculateTotalSaleAction());
  };
};

export const calculateTotalSaleAction = () => {
  return (dispatch, getStore) => {
    const { productosVendidos, venta } = getStore().ventas;

    const totalGlobal = productosVendidos.reduce((acumulador, productoVendido) => productoVendido.total + acumulador, 0);

    venta.total = totalGlobal;

    dispatch({
      type: actions.UPDATE_TOTAL,
      payload: { ...venta }
    });
  };
};

export const registerPaymentAction = (cantidad, isPagoTotal) => {
  return (dispatch, getStore) => {

    const { pagos } = getStore().ventas;
    const pagosCopy = [...pagos];

    const pagoTotal = isPagoTotal ? "TOTAL_PAYMENT" : "DEBT_PAYMENT";
    const date = getDate();

    const paymentInfo = {
      amount: cantidad,
      date: date,
      type: pagoTotal
    };

    pagosCopy.push(paymentInfo);


    dispatch({
      type: actions.REGISTER_PAYMENT,
      payload: pagosCopy
    });
  };
};

export const postSaleAction = () => {
  return async (dispatch, getStore) => {
    try {
      const { venta, productosVendidos, pagos } = getStore().ventas;

      const newVenta = {
        ...venta,
        paid: true,
        client: null,
        soldProducts: [],
        payments: []
      };

      const postData = {
        venta: newVenta,
        productosVendidos,
        pagos
      };

      const resultData = await registerSale(postData);
      const ventaData = resultData.data.venta;

      dispatch({
        type: actions.POST_SALE_SUCCESS,
        payload: ventaData
      });
    } catch (error) {
      dispatch({
        type: actions.POST_SALE_ERROR,
        payload: error.message
      });
    }
  };
};

export const getSalesAction = () => {
  return async (dispatch, getStore) => {
    try {

      dispatch({
        type: actions.GET_SALES
      });

      const resultData = await getAllSales();
      const ventasData = resultData.data.ventas;

      dispatch({
        type: actions.GET_SALES_SUCCESS,
        payload: ventasData
      });
    } catch (error) {
      dispatch({
        type: actions.GET_SALES_ERROR,
        payload: error.message
      });
    }
  };
};

export const getSaleAction = (saleId) => {
  return async (dispatch, getStore) => {
    try {
      dispatch({
        type: actions.GET_SALE
      });

      const resultData = await getSale(saleId);
      const ventaData = resultData.data.venta;

      dispatch({
        type: actions.GET_SALE_SUCCESS,
        payload: ventaData
      });
    } catch (error) {
      dispatch({
        type: actions.GET_SALE_ERROR,
        payload: error.message
      });
    }
  };
};
