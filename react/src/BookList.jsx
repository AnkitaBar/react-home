import Book from "./Book";
import React from "react";
import books from "./Book.json"





const BookList = () => {
  return (
    <div>
    {books.map((ele) =>{
      

      return <Book
        image={ele.image}
        title={ele.title}
        author={ele.author}
        price={ele.price}
      />
    })}
      

    </div>
  );
};

export default BookList;
