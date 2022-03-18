import * as uploadsService from "../services/uploads.service";
import { putProductoAction } from "../redux/productosDuck";

const actions = {
  POST_IMAGE: "POST_IMAGE",
  POST_IMAGE_SUCCESS: "POST_IMAGE_SUCCESS",
  POST_IMAGE_ERROR: "POST_IMAGE_ERROR",

  DELETE_IMAGE: "DELETE_IMAGE",
  DELETE_IMAGE_SUCCESS: "DELETE_IMAGE_SUCCESS",
  DELETE_IMAGE_ERROR: "DELETE_IMAGE_ERROR",
}

let initialState = {
  imagenInfo: null,
  loading: false,
  error: ""
};

export default function reducer(state = initialState, action) {
  switch (action.type) {

    // POST IMAGEN
    case actions.POST_IMAGE:
      return { ...state, loading: true };
    case actions.POST_IMAGE_SUCCESS:
      return { ...state, loading: false, imagenInfo: { ...action.payload } };
    case actions.POST_IMAGE_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}

// Action Creator (Thunk)
export const postImagenAction = (imagenData) => {
  return async (dispatch, getStore) => {
    try {
      dispatch({
        type: actions.POST_IMAGE
      });
      const responseData = await uploadsService.createImage(imagenData);
      const imagenInfo = responseData.data.imagenInfo;
  
      dispatch({
        type: actions.POST_IMAGE_SUCCESS,
        payload: imagenInfo
      });
    } catch (error) {
      dispatch({
        type: actions.POST_IMAGE_ERROR,
        payload: error.response.message
      });
    }
  };
};

export const updateProductoImageAction = (imagenData, productoId) => {
  return async (dispatch, getStore) => {
    try {
      dispatch(postImagenAction(imagenData))
  
      const { imagenInfo } = getStore().uploads;
      console.log("path", imagenInfo.path);
  
      const updateProducto = {
        producto: {
          img: imagenInfo.path
        }
      }
      dispatch(putProductoAction(productoId, updateProducto));
    } catch (error) {
      console.log("ERROR AL CREAT IMAGEN", error);
    }
  };
};