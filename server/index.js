const epxress = require('express')
const path = require('path')

const app = express()

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
    accessToken: '60bc031d84ee487caa8cdd049755caa0',
    captureUncaught: true,
    captureUnhandledRejections: true,
})

rollbar.log('Hello world!')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

const port = process.env.PORT || 4545

app.listen(port, () => console.log(`Running on port ${port}`))