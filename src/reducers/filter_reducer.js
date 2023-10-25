import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      //get the price of all products
      let maxPrice = action.payload.map((product) => product.price);
      //get the max
      maxPrice = Math.max(...maxPrice);

      return {
        ...state,
        all_products: [...action.payload],
        filtered_products: [...action.payload],
        filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
      };
    case SET_GRIDVIEW:
      return { ...state, grid_view: true };
    case SET_LISTVIEW:
      return { ...state, grid_view: false };

    case UPDATE_SORT:
      return { ...state, sort: action.payload };

    case SORT_PRODUCTS:
      const { sort, filtered_products } = state;
      let tempProducts = [...filtered_products];
      //sort by using price
      if (sort === "price-lowest") {
        tempProducts.sort((a, b) => a.price - b.price);
      }
      if (sort === "price-highest") {
        tempProducts.sort((a, b) => b.price - a.price);
      }
      if (sort === "name-a") {
        tempProducts.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
      if (sort === "name-z") {
        tempProducts.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }

      //return filtered_products as tempProducts just incase theres a scenario where the above conditions do not match.
      return { ...state, filtered_products: tempProducts };

    case UPDATE_FILTERS:
      const { name, value } = action.payload;
      //whatever we type should be our value
      return { ...state, filters: { ...state.filters, [name]: value } };

    case FILTER_PRODUCTS:
      //get all the products state so we can access it
      const { all_products } = state;

      const { text, color, category, company, shipping, price } = state.filters;
      // get the fresh copy of all the products
      //at first,when the temporaryProducts is all products, the text and 0the properties are false.
      // let temporaryProducts = [...all_products];
      let temporaryProducts = [...all_products];
      //filtering
      //! text
      if (text) {
        temporaryProducts = temporaryProducts.filter((product) => {
          // return product.name.toLowerCase().startsWith(text);
          return product.name.toLowerCase().includes(text);
        });
      }

      //!category
      //if category is not all then...
      if (category !== "all") {
        temporaryProducts = temporaryProducts.filter(
          (product) => product.category === category
        );
      }

      //!company
      if (company !== "all") {
        temporaryProducts = temporaryProducts.filter(
          (product) => product.company === company
        );
      }

      //! colors
      //
      if (color !== "all") {
        temporaryProducts = temporaryProducts.filter((product) => {
          return product.colors.find((c) => c === color);
        });
      }

      //! price

      //get the price of the products if the product of the price is less than the our price set
      temporaryProducts = temporaryProducts.filter((product) => {
        return product.price <= price;
      });
      //! shipping
      if (shipping) {
        temporaryProducts = temporaryProducts.filter((product) => {
          return product.shipping === true;
        });
      }
      return { ...state, filtered_products: temporaryProducts };

    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          company: "all",
          category: "all",
          color: "all",
          price: state.filters.max_price,
          shipping: false,
        },
      };
    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default filter_reducer;
