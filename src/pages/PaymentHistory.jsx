import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PaymentHistory.css'; // Assuming you will create this CSS file

const PaymentHistory = () => {
    const [students, setStudents] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState('');
    const [payments, setPayments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:3001/students')
            .then(res => {
                setStudents(res.data.students);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setError('Failed to fetch students');
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        if (selectedStudent) {
            setLoading(true);
            axios.get(`http://localhost:3001/payments/${selectedStudent}`)
                .then(res => {
                    setPayments(res.data.payments);
                    setLoading(false);
                })
                .catch(err => {
                    console.log(err);
                    setError('Failed to fetch payment history');
                    setLoading(false);
                });
        }
    }, [selectedStudent]);

    return (
        <div className="payment-history">
            <h1>Payment History</h1>
            <div className="student-selector">
                <label>Select Student:</label>
                <select onChange={(e) => setSelectedStudent(e.target.value)} value={selectedStudent}>
                    <option value="">Select a student</option>
                    {students.map(student => (
                        <option key={student._id} value={student._id}>{student.username}</option>
                    ))}
                </select>
            </div>
            <div className="payment-details">
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p className="error-message">{error}</p>
                ) : payments.length > 0 ? (
                    <ul>
                        {payments.map((payment, index) => (
                            <li key={index} className="payment-item">
                                <p>Amount: {payment.amount} ILS</p>
                                <p>Date: {new Date(payment.paymentDate).toLocaleDateString()}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No payments found</p>
                )}
            </div>
        </div>
    );
};

export default PaymentHistory;
