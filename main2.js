const http =require('http')
const fs = require('fs')


const server = http.createServer((req,res)=>{
    
    const {url,method,headers} = req

    console.log(`url :${url}\n Methood :${method}\n Headers:${headers}`)
    
    if(url==='/hello'){
    
        res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title>Hello World</title></head>')
    res.write('<body><center><h1 style="color:blue;">Hello World</h1></center></body>')
    res.write('</html>')
    return res.end()

    }

    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title>Home Page</title></head>')
    res.write('<body><center><h1 style="color:blue;">Home Page</h1></center></body>')
    res.write('</html>')
    res.end()
})

server.listen(3000)