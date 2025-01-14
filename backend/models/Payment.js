// models/Payment.js
import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    paymentDate: {
        type: Date,
        default: Date.now
    }
});

const PaymentModel = mongoose.model('Payment', PaymentSchema);

export default PaymentModel;
