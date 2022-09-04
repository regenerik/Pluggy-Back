const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const axios  = require("axios")
const {scraping} = require("./src/generalControllerss.js")
const { PORT } = process.env;
server.listen(PORT, () => console.log(`Listen on port ${PORT}`))

// sync todos los modelos de una vez;


  
  conn.sync({ force: true }).then(() => {
    server.listen({port}, () => {
    console.log('%s listening at 3001🥂')
    scraping()
    });
  });




