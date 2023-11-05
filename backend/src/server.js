const express = require('express')
const routes = require('./routes.js')
require('./database/index.js')

const app = express();



app.use(express.urlencoded({extended:true}))
app.use(routes);

