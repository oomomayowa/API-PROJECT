const express = require("express")
const app = express();


let studentArr =[
    {name:"justina", school:"waziri",level:300,course:"accounting", genda:"female"},
    {name:"hikmat", school:"kwasu",level:400,course:"agriculture", genda:"female"},
    {name:"james", school:"lautech",level:500,course:"computer", genda:"male"},
    {name:"gringo", school:"uni-ib",level:100,course:"english", genda:"male"}



]


app.get("/",(request,response)=>{
    response.send(studentArr)
})

app.listen(5004,(err)=>{
    if(err){
        console.log("server no gree start");
    }else{
        console.log("server has started");
    }
})