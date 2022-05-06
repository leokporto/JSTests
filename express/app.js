const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const sessionsRouter = require('./src/routers/sessionsRouter');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname,'/public/')));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/sessions', sessionsRouter);

app.get('/',(req,res)=>{
    res.render('index', {title: 'Welcome to my first DYNAMIC page!'});
});

app.listen(PORT, ()=>{
    debug(`Express server running to port ${chalk.green(PORT)}`);    
});
