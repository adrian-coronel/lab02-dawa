const express = require('express');
const routes = require('./routes/templates.routes.js')
const app = express();
const port = 3000;

app.use(routes)

app.listen(port, () => {console.log(`Server on port ${port}`)});

