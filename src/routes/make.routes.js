import { Router } from 'express'
import { addNewMake, deleteMake, getMakes, updateMake } from '../controllers/makeMaster.controller.js';

const makeRouter = Router();

makeRouter.route('/newMake').post(addNewMake);
makeRouter.route('/getMakes').get(getMakes);
makeRouter.route('/updateMake').put(updateMake);
makeRouter.route('/deleteMake').delete(deleteMake);


export default makeRouter;