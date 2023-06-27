import { BUY_BOOK } from "./BookTypes";

const initialState = {
  numOfBooks: 20,
};
const BookReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_BOOK:
      return {
        ...state,
        numOfBooks: state.numOfBooks - 1,
      };
    default:
      return state;
  }
};
export default BookReducer;
