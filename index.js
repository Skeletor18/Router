const express = require('express')
const app = express()
const port = 4000
app.use(require('./routes/brands.route'))
app.use(require('./routes/products.route'))
app.listen(port, function(){
    console.log(`Сервер успешно создаy  http://localhost:${port}`)
})