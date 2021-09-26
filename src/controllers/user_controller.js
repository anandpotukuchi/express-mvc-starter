var User = require('../models/user.model')

module.exports = {


    get_index: (req, res) => {
    
        new Promise((resolve, reject) => {
                
            resolve(null)
        })
        .then(() => {
    
            res
            .status(200)
            .json({
                message: "user api endpoint",
                data: null,
                status: 200
    
            })
    
        })
        .catch( err => {
            res.status(500).json({
                message: err,
                data: null,
                status: 500
    
            })
        })
    },

    addUser: (req, res) => {

        var body = req.body;

        new Promise((resolve, reject) => {
                    
            resolve(null)
        })
        .then(() => {


            console.log("body ", body)

            const newUser = new User(body);
            newUser.save().then(() => console.log(' record saved'));

        })
            .catch( err => {

                console.log("error : ", err)
                res
                .status(404)
                .json({
                    message: err,
                    data: null,
                    status: 404
        
                }) 
            })

        .catch ( err => {

            console.log("error: ", err)
            res
            .status(500)
            .json({
                message: err,
                data: null,
                status: 500
    
            }) 

        })
    },
    

    getOneById: (req, res) => {

        var params = req.params

        new Promise((resolve, reject) => {
                    
            resolve(null)
        })
        .then(() => {

            User.findOne(params.id)
            .then(data => {
                res
                .status(200)
                .json({
                    message: "get user!",
                    data,
                    status: 200
        
                })
            })
            .catch( err => {
                res
                .status(404)
                .json({
                    message: err,
                    data: null,
                    status: 404
        
                }) 
            })

        
        })
        .catch( err => { 
            res
            .status(500)
            .json({
                message: err,
                data: null,
                status: 500

            })
        })
    },

    getAll: (req, res) => {

        new Promise((resolve, reject) => {
                    
            resolve(null)
        })
        .then(() => {

            User.find({})
            .then(data => {
                res
                .status(200)
                .json({
                    message: "get all users!",
                    data,
                    status: 200
        
                })
            })
            .catch( err => {
                res
                .status(404)
                .json({
                    message: err,
                    data: null,
                    status: 404
        
                }) 
            })

        
        })
        .catch( err => { 
            res
            .status(500)
            .json({
                message: err,
                data: null,
                status: 500

            })
        })

    },

    remove: async (req, res) => {
       
        var body = req.body


        try{
            const removedCar = await Car.removeCar(carName);
            res.send('Car successfully deleted');
        }
        catch(err) {
            res.send('Delete failed..!');
        }
    }

};