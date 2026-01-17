const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.sendFile('index.html', { root: __dirname })
    // res.send("<h1>Home Page</h1>")
})
app.post('/student-data',(req,res)=>{
     var name = req.body.firstName + ' ' + req.body.lastName; 
 
    res.send(name + ' Submitted Successfully!'); 

})

app.get('/about', function (req, res) { 
res.send("About Page!"); 
}); 
app.get('/:id', function(req, res){ 
    res.send('The id you specified is ' + req.params.id); 
 });

 app.get('/:name/:id', function(req, res) { 
res.send('id: ' + req.params.id + ' and <br> name: ' + req.params.name); 
}); 


app.listen(3000,()=>{
    console.log("Server is running.....");
    
})