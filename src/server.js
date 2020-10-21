const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');

//settings
app.set('port', process.env.PORT || 8000);
app.set('views', path.join(__dirname, 'docs'));

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../webpack.config');

app.use(webpackDevMiddleware(webpack(webpackConfig)));

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));

//global variables

//routes
app.use(require('./routes/index.routes'));

//static files 
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;