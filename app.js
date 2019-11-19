var PORT = process.env.PORT || 5000;
var express = require("express");
var path = require("path");

const app = express();

app.use(express.static('public'));

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "index.html"));
})

app.listen(port, () => {
    console.log(`app is running on ${port}`);
})