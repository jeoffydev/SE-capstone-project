let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");
router.get('/', (req, res) => {
    Controllers.userController.getUsers(res);
})
 
//Create user
router.post('/create', (req, res) => {
    console.log("REQ ", req)
    Controllers.userController.createUser(req.body, res)
})
module.exports = router;