const router = require("express").Router();
const {
  addNewDepartment,
  GetAllDepartments,
  deleteDepartment,
  updateDepartment,
} = require("../controllers/department.controller");

router.post('/add',addNewDepartment); 
router.get('/',GetAllDepartments); 
router.delete('/delete/:id',deleteDepartment); 
router.put('/edit/:id',updateDepartment) ; 



module.exports = router ; 