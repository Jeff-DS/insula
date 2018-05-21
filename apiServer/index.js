const port = process.env.PORT || 3000;

import express from "express";
const app = express();
    
import apiRoutes from "./routes/api";
import bodyParser from "body-parser";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/', apiRoutes);

app.listen(port, function(){
    console.log("Server listening on ", process.env.PORT);
});