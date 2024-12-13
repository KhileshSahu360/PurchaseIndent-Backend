import { Router } from 'express'
import { addNewItem, getItems } from '../controllers/itemMaster.controller.js';

const itemRouter = Router();

itemRouter.route('/newItem').post(addNewItem);
itemRouter.route('/getItems').get(getItems);


export default itemRouter;