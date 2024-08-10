import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from '../BookCard/BookCard.jsx'; // Adjust path as necessary

const ShwoingB = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/books')
            .then(res => {
                console.log(res.data); // Verify the structure of the data
                setBooks(res.data.books);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='book-list'>
            {books.length > 0 ? (
                books.map((book, index) => (
                    <BookCard key={index} book={book} />
                ))
            ) : (
                <p>No books available</p>
            )}
        </div>
    );
};

export default ShwoingB;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import BookCard from '../BookCard/BookCard.jsx'; // Adjust path as necessary

// const ShwoingB = () => {
//     const [books, setBooks] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:3001/books')
//             .then(res => {
//                 console.log(res.data); // Check the structure of the data
//                 setBooks(res.data.books);
//             })
//             .catch(err => console.log(err));
//     }, []);

//     return (
//         <div className='book-list'>
//             {books.length > 0 ? (
//                 books.map((book, index) => (
//                     <BookCard key={index} book={book} />
//                 ))
//             ) : (
//                 <p>No books available</p>
//             )}
//         </div>
//     );
// };

// export default ShwoingB;


// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import BookCard from '../BookCard/BookCard'; // Adjust the path according to your project structure

// const ShwoingB = () => {
//     const [books, setBooks] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:3001/books')
//             .then(res => {
//                 setBooks(res.data.books);
//                 console.log(res.data.books);
//             })
//             .catch(err => console.log(err));
//     }, []);

//     return (
//         <div className='book-list'>
//             {books.length > 0 ? (
//                 books.map((book, index) => (
//                     <BookCard key={index} book={book} />
//                 ))
//             ) : (
//                 <p>No books available</p>
//             )}
//         </div>
//     );
// };

// export default ShwoingB;


// export default function ShwoingB() {

//     const [Books, setBooks] = useState([])
//     useEffect(() => {
//         axios.get('http://localhost:3001/books')
//             .then(res => {
//                 setBooks(res.data.Books)
//                 console.log(res.data.Books)
//             }).catch(err => console.log(err))
//     }, [])
//     return (
//         <div>ShwoingBooks</div>
//     )
// }




// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const ShwoingB = () => {
//     const [books, setBooks] = useState([])
//     useEffect(() => {
//         axios.get('http://localhost:3001/books')
//             .then(res => {
//                 setBooks(res.data.books)
//                 console.log(res.data.books)
//             }).catch(err => console.log(err))
//     }, [])
//     return (
//         <div className='book-list'>
//             ijijijijijjiji
//         </div>
//     )
// }

// export default ShwoingB


