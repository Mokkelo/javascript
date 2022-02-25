const express = require('express')
const { v4: uuidv4 } = require('uuid');

const router = express.Router()
const kuitit = [

    {
      "id": uuidv4(),
      "ostaja":"Matti",
      "tuote": "kyna",
      "hinta": "100"
    }
    
    ];

const ostajanKuitit =[
    {
        "id": uuidv4(),
        "ostaja":"Matti",
        "tuote": "kyna",
        "hinta": "100"
      }
];    

const ostoskori =[
    {
        "id": uuidv4(),
        "ostaja":"Matti",
        "tuote": "kyna",
        "hinta": "100"
      }
];   




router.get('/', (req,res) => {
    res.json(kuitit);
})

router.get('/id/:kuittiId', (req,res) => {
    let foundIndex = -1;
    for(let i = 0; i< kuitit.length; i++){
        if(kuitit[i].id === req.params.kuittiId){
            foundIndex = i;
            break;
        }
    }
    if (foundIndex === -1){
        res.sendStatus(404);
    } else {
        res.json(kuitit[foundIndex]);
    }
})

router.get('/:ostaja', (req,res) => {                       // tässä ajatuksena hakea käyttäjän kaikki kuitit käyttäjän nimellä
    let foundName = "wwwwww";
    ostajanKuitit.splice(0, ostajanKuitit.length);
    console.log(kuitit);
    for(let i = 0; i< kuitit.length; i++){
        console.log(req.params.ostaja);
        if(kuitit[i].ostaja === req.params.ostaja){
            ostajanKuitit.push({
                id: uuidv4(),
                ostaja: req.params.ostaja,
                tuote: kuitit[i].tuote,                         //tähän toteutus että lisää taulukkoon
                hinta: kuitit[i].hinta,
            });
            
                                    
           
        }}
        foundName = req.params.ostaja; 
        if (foundName == "wwwwww"){
            res.sendStatus(404);
        }
         else {
            console.log(ostajanKuitit);

                  res.json(ostajanKuitit);                  //tänne res.json uusitaulukko
        }
    }
)

router.delete('/:kuittiId', (req,res)=> {
    let foundUser = kuitit.findIndex(t=> t.id === req.params.kuittiId);
    if(foundUser === -1) {
        res.sendStatus(404);
    } else {
        kuitit.splice(foundUser, 1);
        res.sendStatus(202);
    }
})

router.post('/', (req, res) => {
    console.log(req.body);

    kuitit.push({
        id: uuidv4(),
        ostaja: req.body.ostaja,
        tuote: req.body.tuote,
        hinta: req.body.hinta,
    });
    res.sendStatus(201);
})
/*
router.post('/kayttajankuitti', (req, res) => {
    console.log(req.body);

    kayttajankuitti.push({
        id: uuidv4(),
        ostaja: req.body.ostaja,
        tuote: req.body.tuote,
        hinta: req.body.hinta,
    });
    res.sendStatus(201);
})*/

router.put('/:kuittiId', (req, res) => {
    let foundUser = kuitit.find(t => t.id === req.params.kuittiId);
    if(foundUser ) {

        foundUser.ostaja = req.body.ostaja;
        foundUser.tuote = req.body.tuote;
        foundUser.hinta = req.body.hinta;

        res.sendStatus(202);
    }
    else {
        res.sendStatus(404)
    }
})



module.exports = router