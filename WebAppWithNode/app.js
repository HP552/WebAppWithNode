const http = require('http')
const fs = require('fs')
const port = 2000

const server =  http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type': 'text/html'})
    fs.readFile('./content.html', null, function(error, data){
        if(error){
            res.writeHead(404)
            res.write('File not found!')
            }else{
                res.write(data)
            }
        loadStyle()
        res.end()
    })
})
function loadStyle () {
    var currentSheet = document.getElementById("stylesheet")

    currentSheet.href = stylez;
  }


server.listen(port, function(error){
    if(error){
        console.log('Something went wrong', error)
    }else{
        console.log('Server is listening on port ' + port)
    }
})