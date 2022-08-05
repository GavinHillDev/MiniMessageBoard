const express = require('express')
const app = express()
const ejs = require("ejs");
const path = require('path');
const PORT = 8000
const bodyParser = require('body-parser');
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'));


const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
 ];


app.get('/', (req, res) => {
    res.render('index.ejs', {title: "Mini Message Board", messages: messages})

})

app.get('/new', (req, res) => {
    res.render('new')
})

app.post('/new', (req, res) => {
    messages.push({text: req.body.messageText, user: req.body.messageUser, added: new Date()});
    res.redirect('/')
})



app.use(function(req, res, next) {
    res.status(404).render("404");
});
