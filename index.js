// const http = require('http')
// const server = http.createServer((req,res)=>{    
// const {url}=req;
// console.log(url);
// if (url==='/'){
//     res.end("hello from nodejs");
// }
// else if(url==='/contact'){
//     res.end("hello from contact");
// }
// else{
//     res.writeHead(404)
//     res.end("not found");
// }
    
    
    
    
//     // console.log(req.url)
//     // res.end("hello from nodejs");
// });
// server.listen(3000,()=>{
//     console.log('runnung server on p 3000');
    
// })



const express= require('express')
const morgan = require('morgan')
const app=express() 
app.set('views','./views') 
app.set('view engine','ejs')
app.use(morgan('dev'))
app.get('/',(req,res)=>{
    res.render('index',{message:'hello from node express'})
})

app.get('/contact',(req,res)=>{
    res.render('index',{message:'hello from contact'})
})
app.get('*',(req,res)=>{
    res.status(404).render('index',{message:'not found please'})
})
const PORT=3000;
app.listen(PORT,()=>{
    console.log(`server may be runing on ${PORT}`);
})


