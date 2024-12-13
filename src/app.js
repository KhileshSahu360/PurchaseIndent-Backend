import express from 'express';
import cors from 'cors'
import itemRouter from './routes/item.routes.js';
import departmetRouter from './routes/department.routes.js';
import indentTypeRouter from './routes/indentType.routes.js';
import makeRouter from './routes/make.routes.js';
import purchaseIndentRouter from './routes/purchaseIndent.routes.js';
import indentTagRouter from './routes/indentTag.routes.js';
import requestedByRouter from './routes/requestedBy.routes.js';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/v1/item',itemRouter);
app.use('/api/v1/department', departmetRouter);
app.use('/api/v1/indentType',indentTypeRouter);
app.use('/api/v1/make',makeRouter);
app.use('/api/v1/purchaseIndent', purchaseIndentRouter);
app.use('/api/v1/indentTag', indentTagRouter);
app.use('/api/v1/requestedBy', requestedByRouter);



export default app;