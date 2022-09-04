const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const axios  = require("axios")
const {scraping} = require("./src/generalControllerss.js")
const  port = 3001 || PORT.env

// sync todos los modelos de una vez;


  
  conn.sync({ force: true }).then(() => {
    server.listen({port}, () => {
    console.log('%s listening at 3001🥂')
    scraping()
    });
  });




