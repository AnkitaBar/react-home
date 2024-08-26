import React from 'react'
import "./Book.css"
const Book = () => {
    const image = "https://m.media-amazon.com/images/I/81vgCEh5VhL._AC._SR360,460.jpg";
    const title = " Why The Apple Falls : Fantastic Physics For Children  ";
    const author = "Swagata Deb & Sandipan Deb";
    const price ="100"
  return (
    <div className='book'>
    <div className='book-image'>

      <img src={image}/>
      </div>
      <div className='book-info'>
    <h2 >{title}</h2>
    <p className='book-author'>Author : {author} </p>
    <p className='book-price'>${price}</p>
    <button>Add to Cart</button>
</div>
    </div>
  )
}

export default Book
