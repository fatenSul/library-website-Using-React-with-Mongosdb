// src/pages/BorrowedBooks.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './BorrowedBooks.css';


const BorrowedBooks = () => {
    const [borrowedBooks, setBorrowedBooks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/borrowedBooks')
            .then(res => setBorrowedBooks(res.data.borrowedBooks))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='borrowedCon'>
            <div className="borrowed-books-container">
            <h2>Borrowed Books</h2>
            <table>
                <thead>
                    <tr>
                        <th>Book Name</th>
                        <th>Student Name</th>
                        <th>Borrowed At</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {borrowedBooks.map((record) => {
                        const borrowedDate = new Date(record.borrowedAt);
                        const today = new Date();
                        const oneWeekLater = new Date(borrowedDate);
                        oneWeekLater.setDate(borrowedDate.getDate() + 7);

                        const isOverdue = today > oneWeekLater && !record.returned;

                        return (
                            <tr key={record._id}>
                                <td>{record.bookId.BookName}</td>
                                <td>{record.studentName}</td>
                                <td>{borrowedDate.toDateString()}</td>
                                <td>
                                    {record.returned ? 'Returned' : (isOverdue ? 'Overdue' : 'On Time')}
                                    {isOverdue && <span className="warning"> (Warning: Overdue!)</span>}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default BorrowedBooks;
