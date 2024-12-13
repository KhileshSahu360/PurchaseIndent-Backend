import { Router } from 'express'
import { addNewDepartment, deleteDepartment, getDepartments, updateDepartment } from '../controllers/departmentMaster.controller.js';

const departmetRouter = Router();

departmetRouter.route('/newDepartment').post(addNewDepartment);
departmetRouter.route('/getDepartments').get(getDepartments);
departmetRouter.route('/updateDepartment').put(updateDepartment);
departmetRouter.route('/deleteDepartment').delete(deleteDepartment);
// departmetRouter.route('/getItem').post(getItem);


export default departmetRouter;