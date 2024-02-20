import mongoose from "mongoose";

const sponsorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please provide a first name"]
    },
    lastName: {
        type: String,
        required: [true, "Please provide a last name"]
    },
    positionInCompany: {
        type: String,
        required: [true, "Please provide a position of you in your company"]
    },
    contactEmail: {
        type: String,
        required: [true, "Please provide a email"]
    },
    contactNumber: {
        type: String,
        required: [true, "Please provide a contact number"]
    },
    companyName: {
        type: String,
        required: [true, "Please provide your company name"]
    },
    sponsorType: {
        type: String,
        required: [true, "Please select a sponsor type"]
    },
    query: {
        type: String
    }
}, { timestamps: true })

const Sponsor = mongoose.models.sponsors || mongoose.model("sponsors", sponsorSchema);

export default Sponsor;