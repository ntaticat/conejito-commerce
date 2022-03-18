import { getAllCategories, createCategory } from "../services/categorias.service";

const actions = {
  GET_CATEGORIES: "GET_CATEGORIES",
  GET_CATEGORIES_SUCCESS: "GET_CATEGORIES_SUCCESS",
  GET_CATEGORIES_ERROR: "GET_CATEGORIES_ERROR",
  POST_CATEGORY: "POST_CATEGORY",
  POST_CATEGORY_SUCCESS: "POST_CATEGORY_SUCCESS",
  POST_CATEGORY_ERROR: "POST_CATEGORY_ERROR"
}

const categoria = {
  _id: "",
  name: "",
  description: "",
  state: false,
  categoryType: "",
  products: []
};

let initialState = {
  categorias: [],
  categoria: { ...categoria },
  loading: false,
  error: ""
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // GET CATEGORIES
    case actions.GET_CATEGORIES:
      return { ...state, loading: true };
    case actions.GET_CATEGORIES_SUCCESS:
      return { ...state, loading: false, categorias: [...action.payload] };
    case actions.GET_CATEGORIES_ERROR:
      return { ...state, loading: false, error: action.payload };

    // POST CATEGORY
    case actions.POST_CATEGORY:
      return { ...state, loading: true };
    case actions.POST_CATEGORY_SUCCESS:
      return { ...state, loading: false, categoria: { ...action.payload } };
    case actions.POST_CATEGORY_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}

// Action Creator (Thunk)

export const getCategoriasAction = () => {
  return async (dispatch, getStore) => {
    try {
      dispatch({
        type: actions.GET_CATEGORIES
      });
      const responseData = await getAllCategories();
      const dbCategorias = responseData.data.categorias;
      dispatch({
        type: actions.GET_CATEGORIES_SUCCESS,
        payload: dbCategorias
      });
    } catch (error) {
      dispatch({
        type: actions.GET_CATEGORIES_ERROR,
        payload: error.response.message
      });
    }
  };
};

export const postCategoryAction = (category) => {
  return async (dispatch, getStore) => {
    try {
      dispatch({
        type: actions.POST_CATEGORY
      });
      const responseData = await createCategory(category);
      const dbCategoria = responseData.data.categoria;
      dispatch({
        type: actions.POST_CATEGORY_SUCCESS,
        payload: dbCategoria
      });
      dispatch(getCategoriasAction());
    } catch (error) {
      dispatch({
        type: actions.POST_CATEGORY_ERROR,
        payload: error.response.message
      });
    }
  };
}