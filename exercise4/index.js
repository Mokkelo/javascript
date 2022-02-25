
const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')
//const app = express()
const port = 3000


const app           = express(),  
      DEFAULT_PORT  = 3000




const products = require('./routes/products')
const users = require('./routes/users')
const kuitti = require('./routes/kuitti')
app.use(cors());

app.use(bodyParser.json());

app.use('/products', products)
app.use('/users', users)
app.use('/kuitti', kuitti)

    
app.listen(port,() => {
        console.log("listening on port " + port);
})

