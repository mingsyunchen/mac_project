const express = require('express');
const app = express();
// app.listen(8765);
const PORT = process.env.PORT || 8765;
app.listen(PORT,console.log(`Server started on port ${PORT}`));
var emprouter = require('./emprouter');
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use('/employee',emprouter);
