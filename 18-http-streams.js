const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    // const file = fs.readFileSync('./content/big.txt', 'utf-8')
    // res.end(file)

    const filStream = fs.createReadStream('./content/big.txt', 'utf-8')

    filStream.on('open', () =>{
        filStream.pipe(res)
    })

    filStream.on('error', (error) =>{
        console.log(error)
    })
})

server.listen(5000)