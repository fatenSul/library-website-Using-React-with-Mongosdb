// models/index.js
const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    books: [
        {
            bookId: { type: String, required: true },
            volumeInfo: {
                title: String,
                authors: [String],
                imageLinks: {
                    thumbnail: String
                },
                publishedDate: String,
                description: String
            }
        }
    ]
});

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;
