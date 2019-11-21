const express = require('express');
const path = require('path'); // path lets us navigate the file system / folders
const hbs = require('hbs');

// require the sql connection file
//const sql = require('./utils/sql');

// heroku assigns a port when it deploys via the process (environment variables - coming soon)
// locally this will run @ port 3000; remotely it'll run wherever heroku tells it to run
const port = process.env.PORT || 3000; // a double pipe -> || means "or"

const app = express();

app.use(express.static('public'));
app.set('view engine', 'hbs');


// a forward slash is the home route (same as index.html)
app.get('/', (req, res) => {
  console.log('at the home route');


  res.render('home', { message: "hi there!", anothermessage: "This is easy!" } );
  // this builds localhost:3000/views/index.html
})


app.get('/content', (req, res) => {
  console.log('at the content route');
  //res.sendFile(path.join(__dirname + '/views/contact.html'));
  res.render('content', { message: "on content page", layout:'portfolio'})
})

app.get('/about', (req, res) => {
  console.log('at the about route');
  //res.sendFile(path.join(__dirname + '/views/contact.html'));
  res.render('about', { message: "on about page", layout:'about'})
})

app.get('/contact', (req, res) => {
  console.log('at the content route');
  //res.sendFile(path.join(__dirname + '/views/contact.html'));
  res.render('contact', { message: "on contact page", layout:'contact'})
})

app.get('/users', (req, res) => {
  sql.getConnection((err, connection) => {
    if (err) {
      return console.log(err.message);
    }

    let query = `SELECT * FROM tbl_card`;

    sql.query(query, (err, rows) => {
      connection.release();

      if (err) { return console.log(err.message) }

      console.log(rows);

      res.render('user', rows[0]);
    })
  })
})

app.get('/portfolio', (req, res) => {
  console.log('at the portfolio route');
  res.send('on the portfolio page!');
})

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});