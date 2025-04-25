import React, { useState } from "react";
import { Link } from "react-router-dom";
import Price from "./ui/Price";
import Ratings from "./ui/Ratings";

const Book = ({ book = {} }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="book">
      <Link to={`/books/${book.id}`}>
        <figure className="book__img--wrapper">
          {!loaded && <div className="book__img--skeleton"></div>}
          <img
            className="book__img"
            src={book.url}
            alt={book.title}
            onLoad={() => setLoaded(true)}
            style={{ display: loaded ? "block" : "none" }}
          />
        </figure>
      </Link>
      <div className="book__title">
        <Link to={`/books/${book.id}`} className="book__title--link">
          {book.title}
        </Link>
      </div>
      <Ratings rating={book.rating} />
      <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
    </div>
  );
};

export default Book;