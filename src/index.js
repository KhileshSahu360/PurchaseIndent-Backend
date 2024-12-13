import app from './app.js'
import dotenv from 'dotenv'
import connectDB from './db/index.js';

dotenv.config();



connectDB()
.then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`⚙️ Server is running at port : 5000`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})
