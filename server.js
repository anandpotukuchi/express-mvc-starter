var express  = require('express')
var bodyParser =  require('body-parser')
var cors = require('cors')
require('dotenv').config()

var config = require('./config/config')
var mongod = require('./util/connect')


var index = require('./src/routes/index.route')

const port = config.serverPort;

mongod.connectToDb()

var app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 

app.use(cors());

//Index route
app.use('/api/', index);



app.listen(port, () => {
    console.log('server started - ', port);
});