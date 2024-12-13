import { Router } from 'express'
import { addNewIndentType, deleteIndentType, getIndentTypes, updateIndentType } from '../controllers/indentTypeMaster.controller.js';

const indentTypeRouter = Router();

indentTypeRouter.route('/newIndentType').post(addNewIndentType);
indentTypeRouter.route('/getIndentTypes').get(getIndentTypes);
indentTypeRouter.route('/updateIndentType').put(updateIndentType);
indentTypeRouter.route('/deleteIndentType').delete(deleteIndentType);
// indentTypeRouter.route('/getItem').post(getItem);


export default indentTypeRouter;