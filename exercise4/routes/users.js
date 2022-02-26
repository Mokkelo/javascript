const express = require('express')
const { v4: uuidv4 } = require('uuid');

const router = express.Router()
const users = [

    {
      "id": uuidv4(),
      "name":"Matti",
      "lname": "Meikäläinen",
      "osoite": "töttöröötie 8",
    },
    {
      "id": uuidv4(),
      "name":"Teppo",
      "lname": "Teikäläinen",
      "osoite": "kahitie 45",
    },
    
    ];




router.get('/', (req,res) => {
    res.json(users);                                //hae kaikki käyttäjät
})

router.get('/id/:userId', (req,res) => {
    let foundIndex = -1;                                        //hae käyttäjä IDllä
    for(let i = 0; i< users.length; i++){
        if(users[i].id === req.params.userId){
            foundIndex = i;
            break;
        }
    }
    if (foundIndex === -1){
        res.sendStatus(404);
    } else {
        res.json(users[foundIndex]);
    }
})

router.get('/:userName', (req,res) => {                                             //hae käyttäjä nimellä
    let foundName = "wwwwww";
    for(let i = 0; i< users.length; i++){
        console.log(req.params.userName);
        if(users[i].name === req.params.userName){
            foundName = req.params.userName;
            console.log(users[i].id);
            res.json(users[i].id)
            break;
        }}
        if (foundName == "wwwwww"){
            //console.log(foundName);
           // res.json(foundName);
            res.sendStatus(404);
        }

         else {
            
        }
    }
)

router.delete('/:usersId', (req,res)=> {                                //poista käyttäjä
    let foundUser = users.findIndex(t=> t.id === req.params.usersId);
    if(foundUser === -1) {
        res.sendStatus(404);
    } else {
        users.splice(foundUser, 1);
        res.sendStatus(202);
    }
})

router.post('/', (req, res) => {                            //lisää käyttäjä
    console.log(req.body);

    users.push({
        id: uuidv4(),
        name: req.body.name,
        lname: req.body.lname,
        osoite: req.body.osoite,
    });
    res.sendStatus(201);
})

router.put('/:userId', (req, res) => {                                  //muokkaa käyttäjää
    let foundUser = users.find(t => t.id === req.params.userId);
    if(foundUser ) {

        foundUser.name = req.body.name;
        foundUser.lname = req.body.lname;
        foundUser.address = req.body.address;

        res.sendStatus(202);
    }
    else {
        res.sendStatus(404)
    }
})



module.exports = router