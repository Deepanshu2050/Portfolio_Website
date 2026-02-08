import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },
        message: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ['new', 'read', 'replied'],
            default: 'new',
        },
        ipAddress: {
            type: String,
            default: '',
        },
    },
    {
        timestamps: true,
    }
);

const Contact = mongoose.model('Contact', ContactSchema);

export default Contact;
