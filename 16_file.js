// RENDER{DISPLAY} HTML OR JSON DATA

const express = require('express');

const app = express();


app.get('',(req,resp)=>{
    resp.send(
        `
        <h1>Welcome to my website</h1><br/>
        <input type="text" placeholder = "user name" value= "${req.query.name}"  />
        <button onclick=alert("butotn clidked") >Click me </button>
        <br/>
        <a href = "/about" about > go to about </a>
    `);
})  

app.get('/about',(req,resp)=>{
    resp.send(
        `<p style="color:red;">About us page coming soon!</p>`
    )
})


app.get('/help',(req,resp)=>{
    resp.send([
        {
            name:'anil',
            email:'adfa@gm.cm',
            page:'help page'
        
        },
        {
            name:'ali',
            email:'adfa@gm.cm',
            page:'help page'
        
        },{
            name:'khan',
            email:'adfa@gm.cm',
            page:'help page'
        
        }
    ])
})

app.listen(5000);