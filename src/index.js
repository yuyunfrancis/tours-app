import React from "react";
import ReactDom from "react-dom";

import "./index.css"
const books = [

    {
        id: 1,
        img: 'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
        title: 'I love you to the Moon and Back',
        author: 'Amella Hepworth'
    },

    {
        id: 2,
        img: 'https://images-na.ssl-images-amazon.com/images/I/81snd8WgSHS._AC_UL200_SR200,200_.jpg',
        title: 'I to the Moon and Back',
        author: 'Amella Hepworth'
    },
    {
        id: 3,
        img: 'https://images-na.ssl-images-amazon.com/images/I/91WEOhz%2B9IL._AC_UL200_SR200,200_.jpg',
        title: 'The christmas pig',
        author: 'J.K Rowling'
    }
]


function BookList() {
    return <section className='booklist'>
        {books.map((book) => {
            return (
                <Book key={book.id} {...book} />
            )
        })}
    </section>

}

const Book = ({ img, title, author }) => {

    const clickHandler = () => {
        alert('hello world')

    }

    return <article className='book'>
        <img src={img} alt="" />
        <h1 onClick={() => console.log({ title })}>{title}</h1>
        <h4>{author}</h4>
        <button type="button" onClick={clickHandler}>reference </button>
        e

    </article>
}




ReactDom.render(<BookList />, document.getElementById('root'))