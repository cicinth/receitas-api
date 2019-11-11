const express = require ('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors())
 
app.use(bodyParser.json());


require('./app/controllers/receitas')(app);


app.get('/', (req , res) => {
    res.send('Opa meu mel!');
});


app.listen(process.env.NODE_PORT, () => {
    console.log(" ⍟ API ⍟ \n- Port: %s", process.env.NODE_PORT)
})
