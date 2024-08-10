// backend/models/BorrowedBook.js
import mongoose from 'mongoose';

const BorrowedBookSchema = new mongoose.Schema({
    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        required: true
    },
    studentName: {
        type: String,
        required: true
    },
    borrowedAt: {
        type: Date,
        default: Date.now
    },
    dueAt: {
        type: Date,
        required: true
    }
});

const BorrowedBookModel = mongoose.model('BorrowedBook', BorrowedBookSchema);

export default BorrowedBookModel;



// // models/BorrowedBook.js
// import mongoose from 'mongoose';

// const BorrowedBookSchema = new mongoose.Schema({
//     bookId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Book',
//         required: true
//     },
//     studentName: {
//         type: String,
//         required: true
//     },
//     borrowedAt: {
//         type: Date,
//         default: Date.now
//     },
//     returned: {
//         type: Boolean,
//         default: false
//     }
// });

// const BorrowedBookModel = mongoose.model('BorrowedBook', BorrowedBookSchema);

// export default BorrowedBookModel;
