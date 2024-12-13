import { Router } from 'express'
import { deletePurchaseIndent, getPurchaseIndents, newPurchaseIndent, updatePurchaseIndent } from '../controllers/purchaseIndent.controller.js';

const purchaseIndentRouter = Router();

purchaseIndentRouter.route('/newPurchaseIndent').post(newPurchaseIndent);
purchaseIndentRouter.route('/getPurchaseIndents').get(getPurchaseIndents);
purchaseIndentRouter.route('/updatePurchaseIndent/:id').put(updatePurchaseIndent);
purchaseIndentRouter.route('/deletePurchaseIndent/:id').delete(deletePurchaseIndent);


export default purchaseIndentRouter;