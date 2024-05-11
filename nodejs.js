const http = require("http")
const express = require('express')

const app = express()

app.get('/sum/:num1/:num2',(req,res)=>{
    const num1 = req.params.num1;
    const num2 = req.params.num2;
    let num = Number(num1)+Number(num2)
    num = num.toString()
    res.end(num)
})


app.listen(3000)
