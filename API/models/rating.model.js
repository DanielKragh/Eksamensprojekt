const mongoose = require('mongoose');


const ratingSchema = new mongoose.Schema({

    rating: {
        type: Number,
        required: [true, 'Rating skal have et tal mellem 0 og 5'],
    },
  
    oprettet: {
        type: Date,
        default: Date.now()
    },
    bruger: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Bruger' 
    },
    produkt: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Produkt' 
    }
})



module.exports = mongoose.model('Rating', ratingSchema, 'rating')