import mongoose from 'mongoose';

const registrationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please provide a first name"]
    },
    lastName: {
        type: String,
        required: [true, "Please provide a last name"]
    },
    collegeName: {
        type: String,
        required: [true, "Please provide a college name"]
    },
    collegeYear: {
        type: String,
        required: [true, "Please provide a college year"]
    },
    email: {
        type: String,
        required: [true, "Please provide a email"]
    },
    contactNumber: {
        type: String,
        required: [true, "Please provide a contact number"]
    },
    githubUsername: {
        type: String,
        required: [true, "Please provide your github username"]
    }
}, { timestamps: true })

const Registration = mongoose.models.registrations || mongoose.model("Registrations", registrationSchema);

export default Registration;