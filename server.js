const express=require('express')
const app=express()
const cors=require('cors')
const con=require('./db')
app.use(cors('*'))
app.use(express.json())



app.get('/',(request,response)=>{
    let query='select * from quotes'
   
    // con.query(query,(err,result)=>{
    //    if(result.length!=0){
    //        response.send(JSON.stringify(result));
    //    }
    // })
    response.send("Backend application is done now part 4");
})

app.listen(9009,()=>{
    console.log("server started @ 9009!!")
})
