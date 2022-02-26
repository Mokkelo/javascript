const express = require('express')
const { v4: uuidv4 } = require('uuid');

const router = express.Router()
let kokonaishinta = 0
const ostoskori =[
    {/*
        "id": uuidv4(),
        "ostaja":"Matti",
        "tuote": "kyna",
        "hinta": "101",
        "kokonaishinta": kokonaishinta*/
      }
];   




router.get('/', (req,res) => {              //hae ostoskori
    res.json(ostoskori);
})



router.post('/', (req, res) => {                //lisää ostoskoriin tuote ja laske kokonaishinta 
let uusikokonaishinta= kokonaishinta+req.body.hinta;
    ostoskori.push({
        id: uuidv4(),
        ostaja: req.body.ostaja,
        tuote: req.body.tuote,
        hinta: req.body.hinta,
        kokonaishinta: uusikokonaishinta
    });
    kokonaishinta=uusikokonaishinta;
    res.sendStatus(201);
})

module.exports = router