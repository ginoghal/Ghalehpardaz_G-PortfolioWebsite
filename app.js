const express = require('express');
const path = require('path'); // path lets us navigate the file system / folders
const hbs = require('hbs');

// heroku assigns a port when it deploys via the process (environment variables - coming soon)
// locally this will run @ port 3000; remotely it'll run wherever heroku tells it to run
const port = process.env.PORT || 3000; // a double pipe -> || means "or"

const app = express();

app.use(express.static('public'));
app.set('view engine', 'hbs');


app.use("/", require('./routes/index.js'));


app.listen(port, () => {
  console.log(`Server running at ${port}`);
});