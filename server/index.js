const express = require('express')
const path = require('path')

const app = express()

var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: '50417134db5748ae9cfecb196c6ad2c2',
  captureUncaught: true,
  captureUnhandledRejections: true
});

rollbar.log('Hello world!')
rollbar.critical('This app is about to explode')
rollbar.warning("Check the niceFunction to make sure it's not a bug")

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})


app.get('/function', (req, res) =>{
    niceFunction()
})

const port = process.env.PORT || 4545

app.listen(port, () => console.log(`Running on port ${port}`))