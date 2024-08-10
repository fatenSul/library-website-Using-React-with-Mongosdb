import React from 'react';
import './BookCard.css'
const BookCard = ({ book }) => {
    const { BookName, authorName, imageUrl } = book;
    return (
        <div className='book-card'>
            <img 
                src={imageUrl ? imageUrl : 'https://via.placeholder.com/128x192'} 
                alt={BookName} 
                className='book-image' 
            />
            <div className='book-details'>
                <h3>{BookName}</h3>
                <p>{authorName}</p>
            </div>
            <div className='book-actions'>
                <button>edit</button>
                <button>delete</button>
            </div>
        </div>
    );
};

export default BookCard;



// const BookCard = ({ book }) => {
//     const {name , auhtor , imageUrl} =book;
//     return (
//         <div className='book-card'>
//             <img src={imageUrl} alt={name} className='book-image' />
//             <div className='book-details'>
//                 <h3>{name}</h3>
//                 <p>{auhtor}</p>
//             </div>
//             <div className='book-actions'>
//                 <button>edit</button>
//                 <button>delete</button>
//             </div>
//         </div>
//     )
// }

// export default BookCard



