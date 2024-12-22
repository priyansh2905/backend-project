// require('dotenv').config({path : './env'});

import dotenv from 'dotenv'
import connectDB from "./db/index.js"

dotenv.config({
    path: './env'
})

const port = process.env.PORT || 8000;

connectDB()
.then(() => {
    app.listen(port, () =>{
        console.log(`App is listening on port ${port}`)
    })
})
.catch((error) => {
    console.log("MongoDB connection error !! ", error)
})

