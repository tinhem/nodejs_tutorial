const express = require('express')
const morgan = require('morgan')
const path = require('path'); 
const handlebars = require('express-handlebars')

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({
  extended: true
}
));
app.use(express.json());

//http logger
//app.use(morgan('combined'))

// template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}
));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// router
app.get('/', (req, res) => {
   res.render('home');
})

app.get('/news', (req, res) => {
//  console.log(req, express.query.q);
  res.render('news');
})

app.get('/search', (req, res) => {
 // console.log(req, express.query.q); lấy data
  res.render('search');
})

app.post('/search', (req, res) => {
  console.log(req, express.body);
  res.send('');
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})