const epxress = require('express')
const path = require('path')

const app = express()

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
    accessToken: '82ac0e4c040843d0917d939e9a7b1f4d',
    captureUncaught: true,
    captureUnhandledRejections: true,
})

rollbar.log('Hello world!')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

const port = process.env.PORT || 4545

app.listen(port, () => console.log(`Running on port ${port}`))