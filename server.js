/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/
/* ***********************
 * Require Statements
 *************************/
const express = require("express")
const expressLayouts = require("express-ejs-layouts")
const env = require("dotenv").config()
const app = express()
const static = require("./routes/static")
const path = require("path");
const sharp = require('sharp');
console.log('Script is running');

// Read an image and resize it
sharp('./image.jpg') // Replace 'image.jpg' with the actual filename
  .resize(800, 600)
  .toFile('output.jpg', (err, info) => {
    // ...
  });

  sharp('C:/path/to/your/image.jpg')
  .resize(800, 600)
  .toFile('output.jpg', (err, info) => {
    // ...
  });

/* ***********************
 * View Engine and Templates
 *************************/
app.set("view engine", "ejs")
app.use(expressLayouts)
app.set("layout", "./layouts/layout") // not at views root

/* ***********************
 * Routes
 *************************/
app.use(static)

// Add index route handler here
app.get("/", function(req, res){
  res.render("index", {title: "Home"})
})

app.get('/checkerboard', (req, res) => {
  res.render('checkerboard', { title: 'Checkerboard' });
});

/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT
const host = process.env.HOST

/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
  console.log(`app listening on ${host}:${port}`)
})
