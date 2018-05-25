const port = process.env.PORT || 3000;
const mongoUrl = '' // TODO

import express from "express";
const app = express();

import apiRoutes from "./routes/api";
import bodyParser from "body-parser";
import passport from "passport";
import session from "express-session";
const MongoStore = require("connect-mongo")(session);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    store: new MongoStore({
        url: 'mongodb://localhost/app'
    })
}));
app.use(passport.initialize());

app.use('/api/', apiRoutes);

app.listen(port, function(){
    console.log("Server listening on ", process.env.PORT);
});