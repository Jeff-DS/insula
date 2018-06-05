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
// app.use(session({
//     store: new MongoStore({
//         url: 'mongodb://localhost/insula'
//     })
// }));
// app.use(passport.initialize());

app.use('/api', apiRoutes);

// If no routes are reached
app.use((req,res,next) => {
    console.log("Not found");
    let err = new Error("Not Found (apiServer/index.js)");
    err.status = 404;
    res.send(err);
});

app.listen(port, function(){
    console.log("Server listening on ", process.env.PORT);
});
