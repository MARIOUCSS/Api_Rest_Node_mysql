'use strict'

const app = require('./app/app')

// database

require('./config/connection')

app.listen(app.get('port'), (err) => {
    if(err) {
        console.log(`there was an error : ${err}`)
    }else {
        console.log(`server running on port : ${app.get('port')}`)
    }
})