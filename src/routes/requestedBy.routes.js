import { Router } from 'express'
import { getRequestedBy } from '../controllers/requestedBy.controller.js';

const requestedByRouter = Router();

// requestedByRouter.route('/newIndentTag').post(addNewIndentTag);
requestedByRouter.route('/getRequestedBy').get(getRequestedBy);
// requestedByRouter.route('/updateIndentTag').put(updateIndentTag);
// requestedByRouter.route('/deleteIndentTag').delete(deleteIndentTag);


export default requestedByRouter;