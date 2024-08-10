import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LendBook.css';  // Make sure to import the CSS file

const LendBook = () => {
    const [bookId, setBookId] = useState('');
    const [studentName, setStudentName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/lendBook', { bookId, studentName })
            .then(res => {
                alert(res.data.message);
                navigate('/borrowedBooks');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="container">
            {/* <img src="./R.png" alt="Logo" className="logo" /> */}
            <h2>Lend a Book</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Book ID:
                    <input
                        type="text"
                        value={bookId}
                        onChange={(e) => setBookId(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Student Name:
                    <input
                        type="text"
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Lend Book</button>
            </form>
        </div>
    );
};

export default LendBook;
