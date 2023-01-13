const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let ResumeContactSchema = new Schema({
    name: {
        type: String,
        require: true 
    },
    email: {
        type: String,
        require: true 
    },
    message: {
        type: String,
        require: true 
    }
}, {
    collection: "contact"
})

module.exports = mongoose.model('contact', ResumeContactSchema);