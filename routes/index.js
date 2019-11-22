const express = require('express');
const router = express.Router();
const hbs = require('hbs');



// a forward slash is the home route (same as index.html)
router.get('/', (req, res) => {
    console.log('at the home route');
  
  
    res.render('home', { message: "hi there!", anothermessage: "This is easy!", tagline: "My name is Gino Ghalehpardaz, web Developper to the Stars!", buttonmessage: "Hire Me!" } );
    // this builds localhost:3000/views/index.html
  })
  
  
  router.get('/content', (req, res) => {
    console.log('at the content route');
    //res.sendFile(path.join(__dirname + '/views/contact.html'));
    res.render('content', { message: "on content page", layout:'portfolio'})
  })
  
  router.get('/about', (req, res) => {
    console.log('at the about route');
    //res.sendFile(path.join(__dirname + '/views/contact.html'));
    res.render('about', { message: "on about page", layout:'about'})
  })
  
  router.get('/contact', (req, res) => {
    console.log('at the content route');
    //res.sendFile(path.join(__dirname + '/views/contact.html'));
    res.render('contact', { message: "on contact page", layout:'contact'})
  })
  
  router.get('/users', (req, res) => {
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
  
  router.get('/portfolio', (req, res) => {
    console.log('at the portfolio route');
    res.send('on the portfolio page!');
  })

  module.exports = router;