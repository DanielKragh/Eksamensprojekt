const Rating = require('../models/rating.model');
const Produkt = require('../models/produkt.model');

const express = require('express');
const formData = require('express-form-data');              

const router = express.Router();
router.use(formData.parse());                              


// ----- HENT/GET ALLE ------------------------------------------------------------------------------------------

router.get('/', async (req, res) => {

    console.log("HENT ALLE ratings");

    try {
        const ratings = await Rating.find().sort([['produkt', 1]]);

        res.json(ratings);

    } catch (err) {
        res.status(500).json({ message: "Der var en fejl i: " + err.message }); // 500 = serverproblem
    }

});



// ----- HENT/GET KOMMENTAR UD FRA PRODUKTS ID  ------------------------------------------------------------------------------------------------------------- 
// ----- OBS! Denne skal ligge før /:id da ordet "soeg" i routen ellers bliver regnet for en "id"

router.get('/produkt/:produktid', async (req, res) => { //

    console.log("ALLE ratings UD FRA PRODUKT ID");

    try {

        const ratings = await Rating.find({
            "produkt": req.params.produktid
        }) 

        res.json(ratings);

    } catch (err) {
        res.status(500).json({ message: "Der var en fejl i: " + err.message }); // 500 = serverproblem
    }

});



// ----- HENT/GET KOMMENTAR UD FRA BRUGER ID ------------------------------------------------------------------------------------------------------------- 

router.get('/bruger/:brugerid', async (req, res) => { //

    console.log("ALLE ratings UD FRA BRUGERS ID");

    try {

        const ratings = await Rating.find({
            "bruger": req.params.brugerid
        })

        res.json(ratings);

    } catch (err) {
        res.status(500).json({ message: "Der var en fejl i: " + err.message }); // 500 = serverproblem
    }

});



// ----- HENT/GET UDVALGT  ------------------------------------------------------------------------------------------------------------- 

router.get('/:id', findRating, async (req, res) => { //

    console.log("HENT UDVALGT rating")

    res.json(res.rating);

});



// ----- OPRET/POST NY - ADMIN (medlem skal være logget ind) ---------------------------------------------------------------------------------------

router.post('/admin', async (req, res) => {

    console.log("POST rating")

    let rating = new Rating(req.body);

    try {

        // Kommentar: Gem ny kommentar
        let ny = await rating.save();

        // Produkt: Tilføj ratings id til kommenteret produkts rating-array
        let produkt = await Produkt.findById(req.body.produkt);
        produkt.rating.push(ny._id);
        await produkt.save();

        res.status(201).json({ message: "Ny er oprettet", oprettet: ny });

    } catch (error) {
        res.status(400).json({ message: "Der er sket en fejl", error: error });
    }

});



// ----- SLET/DELETE - ADMIN (medlem skal være logget ind) ------------------------------------------------------------------------------------------------------------ 
// ----- Et medlem bør kun kunne slette egne kommentarer men det er der ikke taget højde for i backenden - forsøg at tage højde for det i frontenden/React

router.delete('/admin/:id', findRating, async (req, res) => {

    console.log("DELETE rating")

    try {

        // Produkt: Slet kommentars id fra kommenteret produkts kommentar-array
        let produkt = await Produkt.findById(res.rating.produkt);
        produkt.rating.pull(res.rating._id);
        await produkt.save();

        // Kommentar: Slet kommentar
        await res.rating.deleteOne(); // ændret fra remove
        res.status(200).json({ message: 'Der er nu slettet' })

    } catch (error) {
        res.status(500).json({ message: 'Kan ikke slettes - der er opstået en fejl: ' + error.message })
    }

});


// ----- PUT/RET - ADMIN (medlem skal være logget ind) ------------------------------------------------------------------------------------------------------------ 
// ----- Et medlem bør kun kunne rette egne kommentarer men det er der ikke taget højde for i backenden - forsøg at tage højde for det i frontenden/React

router.put('/admin/:id', findRating, async (req, res) => {

    console.log("PUT rating")

    try {

        res.rating.rating = req.body.rating;

        // Giver ingen mening at bruger kan skifte id eller produkt som kommentaren skal knyttes til
        // res.kommentar.bruger = req.body.bruger
        // res.kommentar.produkt = req.body.produkt

        await res.rating.save();

        res.status(200).json({ message: 'Der er rettet', rettet: res.rating });

    } catch (error) {
        res.status(400).json({ message: 'Kan ikke rettes - der er opstået en fejl: ' + error.message })
    }

});



// MIDDLEWARE 

// FIND UD FRA ID  ---------------------------------------------------------------------------------------------

async function findRating(req, res, next) {

    console.log("FIND rating UD FRA ID", req.params.id)

    let rating;

    try {

        rating = await Rating.findById(req.params.id);

        if (rating == null) {
            return res.status(404).json({ message: 'Ingen med den ID' });
        }


    } catch (error) {

        console.log(error);
        return res.status(500).json({ message: "Problemer: " + error.message }); // problemer med server
    }

    res.rating = rating; // put det fundne ind i responset
    next();
}


module.exports = router;