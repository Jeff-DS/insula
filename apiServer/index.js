const express = require("express"),
    app = express(),
    port = process.env.PORT || 3000;

const apiRoutes = require("./routes/api");

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/', apiRoutes);

app.listen(port, function(){
    console.log("Server listening on ", process.env.PORT);
})