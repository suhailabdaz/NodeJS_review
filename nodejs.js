const http = require("http")
const url = require("url")



const app = http.createServer((req,res)=>{
    const parsedUrl = url.parse(req.url)
    if(parsedUrl.path=="/"){
        res.end("bibbhb")
    }else{
        res.end("gigigigigigi")
    }
})

app.listen(3000)
