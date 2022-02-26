const router = require("express").Router();
const {
  addNewIlot,
  GetAllIlots,
  updateIlot,
  deleteIlot,
} = require("../controllers/ilot.controller");


router.post('/add',addNewIlot); 
router.get('/',GetAllIlots); 
router.put('/edit/:id',updateIlot); 
router.delete('/delete/:id',deleteIlot) ; 


module.exports = router ; 