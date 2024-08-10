// src/pages/ManageFees.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ManageFees.css';

const ManageFees = () => {
    const [students, setStudents] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState('');
    const [amount, setAmount] = useState('');

    useEffect(() => {
        // Fetch students
        axios.get('http://localhost:3001/students')
            .then(res => {
                console.log('Fetched students:', res.data.students);
                setStudents(res.data.students);
            })
            .catch(err => console.log("Error fetching students:", err));
    }, []); // Empty dependency array means this useEffect runs once after the initial render

    const handlePayment = () => {
        axios.post('http://localhost:3001/payments', {
            studentId: selectedStudent,
            amount
        })
            .then(res => {
                console.log(res.data.message);
                setAmount('');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="manage-fees-container">
            <h1>Manage Monthly Fees</h1>
            <div className="manage-fees-form">
                <label>Select Student:</label>
                <select
                    onChange={(e) => setSelectedStudent(e.target.value)}
                    value={selectedStudent}
                >
                    <option value="">Select a student</option>
                    {students.map(student => (
                        <option key={student._id} value={student._id}>
                            {student.username}
                        </option>
                    ))}
                </select>
            </div>
            <div className="manage-fees-form">
                <label>Amount Paid:</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>
            <button onClick={handlePayment}>Record Payment</button>
        </div>
    );
};

export default ManageFees;
