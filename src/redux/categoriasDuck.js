let actions = {
  GET_CATEGORIES: "GET_CATEGORIES",
  GET_CATEGORIES_SUCCESS: "GET_CATEGORIES_SUCCESS",
  GET_CATEGORIES_ERROR: "GET_CATEGORIES_ERROR"
}

const categoria = {
  name: "",
  description: "",
  state: false,
  categoryType: ""
};

let initialState = {
  categorias: [],  
  categoria: {...categoria},
  loading: false,
  error: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_CATEGORIES:
      return {...state, loading: true};
  
    default:
      return state;
  }
}

// Action Creator