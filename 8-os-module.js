const os = require('os')

const user = os.userInfo()


//print uptime
console.log(`User uptime is ${os.uptime()}`)

const info = {
    type: os.type(),
    name: os.hostname(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}

console.log(info)