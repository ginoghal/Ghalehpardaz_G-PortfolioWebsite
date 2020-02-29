const express = require('express');
const router = express.Router();
const hbs = require('hbs');



// a forward slash is the home route (same as index.html)
router.get('/', (req, res) => {
    console.log('at the home route');
    res.render('home', { message: "hi there!", anothermessage: "This is easy!", tagline: "My name is Gino Ghalehpardaz and welcome to my Portfolio website!", buttonmessage: "See More!", layout:'layout.hbs' } );
    // this builds localhost:3000/views/index.html
  })
  
  
  router.get('/portfolio', (req, res) => {
    console.log('at the portfolio route');
    //res.sendFile(path.join(__dirname + '/views/portfolio.hbs'));
    res.render('portfolio', { message: "on portfolio page", layout:'layout.hbs'})
  })
  
  router.get('/about', (req, res) => {
    console.log('at the about route');
    //res.sendFile(path.join(__dirname + '/views/about.hbs'));
    res.render('about', { message: "on about page", messsage:"Born in London Ontario Canada, I am an aspiring Front End Web Developper, as well as Video and Audio Editor.I have previously worked as a Marketing Coordinator and have experience in graphic design and content marketing.I am currently enrolled in the Interactive Media Design Program at Fanshawe College. I had previously attended Laurier Universityand graduated with honors Criminology and Journalism.I absolutley love web development and media work and am very passionate about everything that I do in life.I enjoy learning and want to be the best I can be and achieve my full potential. Though I am not there it is a daily process and I strive to be better than the day before.When not in school, you can find me in the gym, where I train and teach on a daily basis as a Professional Mixed Martial Artist (my other life passion).",  layout:'layout.hbs'})
  })
  
  router.get('/contact', (req, res) => {
    console.log('at the contact route');
    //res.sendFile(path.join(__dirname + '/views/contact.hbs'));
    res.render('contact', { message: "on contact page", layout:'layout.hbs'})
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


  