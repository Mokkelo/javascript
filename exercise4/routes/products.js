const express = require('express')
const { v4: uuidv4 } = require('uuid');

const router = express.Router()
const products = [

    {
      "id": uuidv4(),
      "name":"kyna",
      //"image": Kyna,
      "price": "100",
    },
    {
      "id": uuidv4(),
      "name":"hdd",
      //"image": hdd,
      "price": "45",
    },
    {
      "id": uuidv4(),
      "name":"johto",
      //"image": johto,
      "price": "4",
    },
    {
      "id": uuidv4(),
      "name":"muste",
     // "image": muste,
      "price": "78",
    },
    {
      "id": uuidv4(),
      "name":"nappis",
      //"image": nappis,
      "price": "177",
    },
    {
      "id": uuidv4(),
      "name":"naytto",
      //"image": naytto,
      "price": "1552",
    },
    {
      "id": uuidv4(),
      "name":"roku",
      //"image": roku,
      "price": "155",
    },
    ];




router.get('/', (req,res) => {                                  //hae kaikki tuotteet
    res.json(products);
})

router.get('/id/:userId', (req,res) => {                            //hae tuote idllä
    let foundIndex = -1;
    for(let i = 0; i< products.length; i++){
        if(products[i].id === req.params.productId){
            foundIndex = i;
            break;
        }
    }
    if (foundIndex === -1){
        res.sendStatus(404);
    } else {
        res.json(products[foundIndex]);
    }
})

router.get('/:productName', (req,res) => {                  //hae tuote nimellä
    let foundName = "wwwwww";
    for(let i = 0; i< products.length; i++){
        console.log(req.params.productName);
        if(products[i].name === req.params.productName){
            foundName = req.params.productName;
            console.log(products[i].id);
            res.json(products[i].id)
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

router.delete('/:productsId', (req,res)=> {                     //poista tuote idllä
    let foundProducts = products.findIndex(t=> t.id === req.params.productsId);
    if(foundProducts === -1) {
        res.sendStatus(404);
    } else {
        products.splice(foundProducts, 1);
        res.sendStatus(202);
    }
})

router.post('/', (req, res) => {                                        //lisää tuote
    console.log(req.body);

    products.push({
        id: uuidv4(),
        name: req.body.name,
        price: req.body.price
    });
    res.sendStatus(201);
})

router.put('/:productsId', (req, res) => {                  //muokkaa tuotetta
    let foundProducts = products.find(t => t.id === req.params.productsId);
    if(foundProducts ) {

        foundProducts.name = req.body.name;
        foundProducts.price = req.body.price;

        res.sendStatus(202);
    }
    else {
        res.sendStatus(404)
    }
})



module.exports = router