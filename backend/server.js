import express, { response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import EmployeeModel from './models/Employee.js';
import StudentModel from './models/Student.js';
import BookModel from './models/Book.js';
import PaymentModel from './models/Payment.js';
import { Book } from '@phosphor-icons/react';
import BorrowedBookModel from './models/BorrowedBook.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect("mongodb://localhost:27017/employee", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Employee endpoints
app.post("/SignUp", async (req, res) => {
    try {
        const employee = await EmployeeModel.create(req.body);
        res.json({ message: "success", employee });
    } catch (err) {
        console.error("Error creating employee:", err);
        res.status(400).json({ message: "Failed to create employee", error: err });
    }
});

app.post("/SignIn", async (req, res) => {
    const { email, password } = req.body;

    try {
        const employee = await EmployeeModel.findOne({ email });
        if (!employee) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = password === employee.password; // No hashing comparison
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        res.json({ message: "success", employee });
    } catch (err) {
        res.status(500).json(err);
    }
});

app.get('/employee/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const employee = await EmployeeModel.findById(id);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.json({ employee });
    } catch (err) {
        res.status(500).json({ message: 'Error fetching employee', error: err });
    }
});

// Student endpoints
app.post("/AddStudents", async (req, res) => {
    try {
        const student = await StudentModel.create(req.body);
        res.json({ message: "success", student });
    } catch (err) {
        console.error("Error creating student:", err);
        res.status(400).json({ message: "Failed to create student", error: err });
    }
});

// Book endpoints
app.post("/AddBooks", async (req, res) => {
    try {
        const book = await BookModel.create(req.body);
        res.json({ message: "success", book });
    } catch (err) {
        console.error("Error creating book:", err);
        res.status(400).json({ message: "Failed to create book", error: err });
    }
});

//Book Showing
// Book Showing

app.get('/books', async (req, res) => {
    try {
        const books = await BookModel.find();
        console.log(books); // Log the books to ensure they are fetched correctly
        return res.json({ books });
    } catch (err) {
        console.error("Error fetching books:", err);
        return res.status(500).json({ message: "Failed to fetch books", error: err });
    }
});


// Route to lend a book
app.post('/lendBook', async (req, res) => {
    const { bookId, studentName } = req.body;

    try {
        // Calculate the due date (1 week from now)
        const dueAt = new Date();
        dueAt.setDate(dueAt.getDate() + 7);

        const borrowedBook = new BorrowedBookModel({
            bookId,
            studentName,
            dueAt,  // Set the calculated due date
        });

        await borrowedBook.save();

        res.json({ message: 'Book lent successfully' });
    } catch (err) {
        console.error("Error lending book:", err);
        res.status(500).json({ message: 'Failed to lend book', error: err });
    }
});
// app.post('/lendBook', async (req, res) => {
//     try {
//         const { bookId, studentName } = req.body;
//         const borrowedBook = await BorrowedBookModel.create({ bookId, studentName });
//         res.json({ message: 'Book lent successfully', borrowedBook });
//     } catch (err) {
//         console.error("Error lending book:", err);
//         res.status(500).json({ message: "Failed to lend book", error: err });
//     }
// });

// // Route to get borrowed books
// app.get('/borrowedBooks', async (req, res) => {
//     try {
//         const borrowedBooks = await BorrowedBookModel.find().populate('bookId');
//         res.json({ borrowedBooks });
//     } catch (err) {
//         console.error("Error fetching borrowed books:", err);
//         res.status(500).json({ message: "Failed to fetch borrowed books", error: err });
//     }
// });

// backend/server.js
app.get('/borrowedBooks', async (req, res) => {
    try {
        const borrowedBooks = await BorrowedBookModel.find().populate('bookId');
        res.json({ borrowedBooks });
    } catch (err) {
        console.error("Error fetching borrowed books:", err);
        res.status(500).json({ message: "Failed to fetch borrowed books", error: err });
    }
});


app.get('/payments/:studentId', async (req, res) => {
    try {
        const payments = await PaymentModel.find({ studentId: req.params.studentId });
        res.json({ payments });
    } catch (err) {
        console.error("Error fetching payments:", err);
        res.status(500).json({ message: "Failed to fetch payments", error: err });
    }
});

app.post('/payments', async (req, res) => {
    try {
        const { studentId, amount } = req.body;

        const payment = await PaymentModel.create({
            studentId,
            amount
        });

        res.json({ message: "Payment recorded", payment });
    } catch (err) {
        console.error("Error recording payment:", err);
        res.status(500).json({ message: "Failed to record payment", error: err });
    }
});

// server.js

// Get all students
// app.get('/students', async (req, res) => {
//     try {
//         const students = await StudentModel.find();
//         res.json({ students });
//     } catch (err) {
//         console.error("Error fetching students:", err);
//         res.status(500).json({ message: "Failed to fetch students", error: err });
//     }
// });

// Get all students
app.get('/students', async (req, res) => {
    try {
        const students = await StudentModel.find(); // Fetch all students from the database
        res.json({ students }); // Respond with a JSON object containing the students array
    } catch (err) {
        console.error("Error fetching students:", err); // Log any errors that occur
        res.status(500).json({ message: "Failed to fetch students", error: err }); // Respond with an error message
    }
});




// app.get('/books', async (req, res) => {
//     try {
//         const books = await BookModel.find();
//         return res.json({ books });  // Return the books in an object
//     } catch (err) {
//         console.error("Error fetching books:", err);
//         return res.status(500).json({ message: "Failed to fetch books", error: err });
//     }
// });





app.listen(3001, () => {
    console.log("Server running on port 3001");
});
