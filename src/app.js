import express from "express"
import cors from  "cors"
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
})) //configuring cors

app.use(express.json({limit: "16kb"})) //configuring that json data can be sent to backend server
app.use(express.urlencoded({extended: true, limit: "16kb"})) // configuring that data can be sent to backend server in the form of url also
app.use(express.static("public")) // configuring the static folders for images, pdfs, other documents, etc
app.use(cookieParser()) // configuring the cookie-parser so that the backend server can access ot set the cookies of the user browser

export {app}