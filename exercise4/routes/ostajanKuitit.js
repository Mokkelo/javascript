/*
const express = require('express')
const { v4: uuidv4 } = require('uuid');

const router = express.Router()
//const kuitit = require('./routes/kuitti')
////////////////TAITAA OLLA TURHA KOKO FILU NYT

const ostajanKuitit =[
    {
        "id": uuidv4(),
        "ostaja":"Matti",
        "tuote": "kyna",
        "hinta": "102"
      }
];   

router.get('/:ostaja', (req,res) => {                       // tässä ajatuksena hakea käyttäjän kaikki kuitit käyttäjän nimellä
    let foundName = "wwwwww";
    ostajanKuitit.splice(0, ostajanKuitit.length);
    //console.log(kuitit);
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

module.exports = router
*/