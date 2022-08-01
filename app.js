const express = require('express');
const app = express();
app.listen(8765);

var emprouter = require('./emprouter');
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use('/employee',emprouter);