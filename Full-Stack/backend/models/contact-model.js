const { Schema, model } = require("mongoose");

const contactSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    subject:{type: String, required: true },
    message: { type: String, required: true },
});

//cretae model or a collection
const Contact = new model('Contact',contactSchema);
module.exports = Contact;