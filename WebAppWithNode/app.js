const http = require('http')
const fs = require('fs')
const port = 2000

const server =  http.createServer(function(req, res){
    var content = selectTheRightRessource(req.url)
    console.log(content + "MOIN")
    if(content.IsSuccess){        
        res.writeHead(200,{'Content-Type': 'text/html'})
    }else{
        res.writeHead(404,{'Content-Type': 'text/plain'})        
    }
    res.write(content.content)
    res.end()    
})

function selectTheRightRessource(url){
    var fileName
    if(url=== "/"){
        fileName = './content.html'
    }else{
        fileName = "." + url
    }

    var fileResult = fs.readFileSync(fileName, null, function(error, data){
        
        if(error){
            return {IsSuccess:false, message:"file not found"}
        }else{
            return {IsSuccess:true, message:data}
        }
    })
    return fileResult.
    
}

server.listen(port, function(error){
    if(error){
        console.log('Something went wrong', error)
    }else{
        console.log('Server is listening on port ' + port)
    }
})