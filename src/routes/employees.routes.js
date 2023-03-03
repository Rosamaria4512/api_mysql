import {Router} from 'express'
import { getEmployees,getEmployee,putEmployees,createEmployees,deleteEmployees} from './controllers/employees.controller.js' 


const router = Router()

router.get('/employees',getEmployees) 
router.get('/employees/:id',getEmployee) 

router.post('/employees',createEmployees) 

router.patch('/employees/:id/', putEmployees) 

router.delete('/employees/:id', deleteEmployees) 


export default router