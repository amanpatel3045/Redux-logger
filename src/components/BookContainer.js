import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyBook } from "../redux/book/BookActions";
const BookContainer = () => {
  const numOfBooks = useSelector((state) => state.book.numOfBooks);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Books:{numOfBooks} </h2>
      <button onClick={() => dispatch(buyBook())}>Buy Book</button>
    </div>
  );
};

export default BookContainer;
