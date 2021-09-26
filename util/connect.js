const mongoose = require('mongoose');
var config = require('../config/config')


module.exports =  {
        connectToDb: () => {
        let dbHost = config.dbHost;
        let dbPort = config.dbPort;
        let dbName = config.dbName;
        
        mongoose.connect(`mongodb://${dbHost}:${dbPort}/${dbName}`, { useMongoClient: true })
        .then( () => {
            console.log("connected to database " + dbName)
        })
        .catch( err => {
            console.error(err)
        })
    }
}
