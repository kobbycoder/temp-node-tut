const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
      return res.end('Welcome to our homepage')
    }
    else if(req.url === '/about'){
      return res.end('Get to know our history')
    }
   return res.end(
       `<h1>Ooops!</h1>
       <a href="/">Home</a>
       `
   )
})

server.listen(5000)