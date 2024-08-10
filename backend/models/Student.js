// import mongoose from 'mongoose';

// const studentSchema = new mongoose.Schema({
//     roll: { type: String, required: true },
//     username: { type: String, required: true },
//     password: { type: String, required: true },
//     grade: { type: String, required: true }
// });

// const StudentModel = mongoose.model('Student', studentSchema);

// export default StudentModel;


import mongoose from "mongoose";
import bcrypt from "bcrypt";

const StudentSchema = new mongoose.Schema({
    Role: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        unique: true,
    },
    Grade: {
        type: String,
        required: true,
    },
    password: {
        type: Number,
        required: true,
    }
});

// EmployeeSchema.pre('save', async function (next) {
//     if (!this.isModified('password')) {
//         return next();
//     }

//     try {
//         const salt = await bcrypt.genSalt(10);
//         this.password = await bcrypt.hash(this.password, salt);
//         next();
//     } catch (err) {
//         return next(err);
//     }
// });

const StudentModel = mongoose.model('student', StudentSchema);

export default StudentModel;
