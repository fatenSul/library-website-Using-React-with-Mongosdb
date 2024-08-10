import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../4.jpg';

const Students = () => {
    const navigate = useNavigate();

    const handleSelection = (path) => {
        navigate(path);
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Books Management</h1>
            <div style={styles.boxContainer}>
                <div
                    style={{ ...styles.box, ...styles.addBox }}
                    onClick={() => handleSelection('/Addbooks')}
                >
                    Add Books
                </div>
                <div
                    style={{ ...styles.box, ...styles.showBox }}
                    onClick={() => handleSelection('/ShowingBooks')}
                >
                    Show All Books
                </div>

                <div
                    style={{ ...styles.box, ...styles.showBox }}
                    onClick={() => handleSelection('/lendBook')}
                >
                    lending Books
                </div>

                <div
                    style={{ ...styles.box, ...styles.showBox }}
                    onClick={() => handleSelection('/borrowedBooks')}
                >
                    Borrowing Books
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: `url(${backgroundImage}) no-repeat center center fixed`,
        
    },
    heading: {
        fontSize: '36px',
        fontWeight: '700',
        color: 'white',
        marginBottom: '40px',
        fontFamily: 'Arial, sans-serif',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        textShadow: '2px 2px 4px white',
    },
    boxContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '30px',
    },
    box: {
        width: '250px',
        height: '250px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: '15px',
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
        fontSize: '22px',
        fontWeight: '600',
        color: '#333',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        textAlign: 'center',
        padding: '20px',
        textTransform: 'uppercase',
    },
    addBox: {
        background: 'linear-gradient(45deg, #ff9a9e, #fad0c4)',
    },
    showBox: {
        background: 'linear-gradient(45deg, #a18cd1, #fbc2eb)',
    },
    boxHover: {
        transform: 'translateY(-10px)',
        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
    }
};

export default Students;
