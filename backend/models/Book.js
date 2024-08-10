// models/Book.js
import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema({
    BookName: {
        type: String,
        required: true
    },
    authorName: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String, // Correct type for imageUrl
        required: false // Assuming imageUrl is optional
    }
});

const BookModel = mongoose.model('Book', BookSchema);

export default BookModel;
