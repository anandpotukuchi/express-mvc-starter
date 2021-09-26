const { route } = require("../routes/index.route")

module.exports = {

    get_index: (req, res) => {
    
        new Promise((resolve, reject) => {
                
            resolve(null)
        })
        .then(() => {
    
            res
            .status(200)
            .json({
                message: "Welcome to API!",
                data: null,
                status: 200
    
            })
    
        })
        .catch( err => {
            res.sendStatus(500).json({
                message: err,
                data: null,
                status: 500
    
            })
        })
    }

}  