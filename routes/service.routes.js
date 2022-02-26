const router = require("express").Router();
const {
  addNewService,
  GetAllServices,
  deleteService,
  updateService
} = require("../controllers/service.controller");

router.post('/add',addNewService) ; 
router.get('/',GetAllServices); 
router.delete('/delete/:id',deleteService) ; 
router.put('/edit/:id',updateService)




module.exports = router ; 