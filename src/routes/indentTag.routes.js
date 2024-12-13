import { Router } from 'express'
import { getIndentTags } from '../controllers/indentTag.controller.js';

const indentTagRouter = Router();

// indentTagRouter.route('/newIndentTag').post(addNewIndentTag);
indentTagRouter.route('/getIndentTags').get(getIndentTags);
// indentTagRouter.route('/updateIndentTag').put(updateIndentTag);
// indentTagRouter.route('/deleteIndentTag').delete(deleteIndentTag);


export default indentTagRouter;