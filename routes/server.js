// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Cart = require('./models/index.js'); // Adjust the path if needed

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/your-db', { useNewUrlParser: true, useUnifiedTopology: true });

// Add a book to the cart
app.post('/api/cart/add', async (req, res) => {
    const { userId, book } = req.body;
    let cart = await Cart.findOne({ userId });

    if (!cart) {
        cart = new Cart({ userId, books: [book] });
    } else {
        cart.books.push(book);
    }

    await cart.save();
    res.status(200).send(cart);
});

// Remove a book from the cart
app.post('/api/cart/remove', async (req, res) => {
    const { userId, bookId } = req.body;
    const cart = await Cart.findOne({ userId });

    if (cart) {
        cart.books = cart.books.filter(book => book.bookId !== bookId);
        await cart.save();
        res.status(200).send(cart);
    } else {
        res.status(404).send({ message: 'Cart not found' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
