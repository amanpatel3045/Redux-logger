import { combineReducers } from "redux";
import CakeReducer from "./cake/CakeReducer";
import IceCreamReducer from "./iceCream/IceCreamReducer";
import BookReducer from "./book/BookReducer";

const rootReducer = combineReducers({
  cake: CakeReducer,
  iceCream: IceCreamReducer,
  book: BookReducer,
});
export default rootReducer;
