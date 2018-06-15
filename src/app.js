const express = require('express'),
      bodyParser = require('body-parser'),
      methodOverride = require('method-override'),
      morgan = require('morgan'),
      exphbs = require('express-handlebars');

const routes = require('./routes');

const app = express();

app.use(morgan('dev'));
app.engine('hbs', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({extended: true}))
app.use(methodOverride("_method"));

app.use('/', routes)



app.listen( 8080, () => console.log('App running at http://localhost:8080/'))