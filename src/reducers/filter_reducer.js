import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
} from "../utils/action";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
    };
  }
  if (action.type === SET_GRIDVIEW) {
    return {
      ...state,
      grid_view: true,
    };
  }
  if (action.type === SET_LISTVIEW) {
    return {
      ...state,
      grid_view: false,
    };
  }
  if (action.type === UPDATE_SORT) {
    return {
      ...state,
      sort: action.payload,
    };
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state;
    let tempProduts = [...filtered_products];
    if (sort === "price-lowest") {
      tempProduts = tempProduts.sort((a, b) => a.price - b.price);
    }
    if (sort === "price-highest") {
      tempProduts = tempProduts.sort((a, b) => b.price - a.price);
    }
    if (sort === "name-a") {
      tempProduts = tempProduts.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sort === "name-z") {
      tempProduts = tempProduts.sort((a, b) => b.name.localeCompare(a.name));
    }
    return { ...state, filtered_products: tempProduts };
  }
  throw new Error(`No matching "${action.type}" - action type`);
};

export default filter_reducer;
