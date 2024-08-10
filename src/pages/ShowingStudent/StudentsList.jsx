import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentsList = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3001/students')
            .then(res => {
                // Check if res.data.students exists and is an array
                if (res.data && Array.isArray(res.data.students)) {
                    console.log('Students data:', res.data.students);
                    setStudents(res.data.students);
                } else {
                    console.error('Unexpected data structure:', res.data);
                    setError('Unexpected data structure');
                }
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching students:', err);
                setError('Error fetching students');
                setLoading(false);
            });
    }, []);

    if (loading) return <p style={styles.loading}>Loading...</p>;
    if (error) return <p style={styles.error}>{error}</p>;

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Student List</h2>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>Username</th>
                        <th style={styles.th}>Roll</th>
                        <th style={styles.th}>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {students.length > 0 ? (
                        students.map(student => (
                            <tr key={student._id} style={styles.tr}>
                                <td style={styles.td}>{student.username || 'N/A'}</td>
                                <td style={styles.td}>{student.roll || 'N/A'}</td>
                                <td style={styles.td}>{student.grade || 'N/A'}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" style={styles.noData}>No students found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

const styles = {
    container: {
        padding: '70px',
        margin:'220px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f8f8f8',
        borderRadius: '50px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    heading: {
        textAlign: 'center',
        marginBottom: '20px',
        color: '#333',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        backgroundColor: '#fff',
    },
    th: {
        backgroundColor: 'brown',
        color: '',
        padding: '10px',
        textAlign: 'left',
        borderBottom: '2px solid #ddd',
    },
    tr: {
        '&:nth-child(even)': {
            backgroundColor: '#f2f2f2',
        },
    },
    td: {
        padding: '10px',
        borderBottom: '1px solid #ddd',
        textAlign: 'left',
    },
    loading: {
        textAlign: 'center',
        color: ' #007BFF',
        fontSize: '18px',
    },
    error: {
        textAlign: 'center',
        color: 'red',
        fontSize: '18px',
    },
    noData: {
        textAlign: 'center',
        padding: '10px',
        fontStyle: 'italic',
        color: '#888',
    }
};

export default StudentsList;
