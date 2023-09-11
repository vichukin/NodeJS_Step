const express = require("express");
const app = express();
const port = 3000;
const jsonParser = express.json();
const pgp = require("pg-promise")();
const db = pgp("postgres://postgres:Qwerty1234@localhost:5432/ExampleDB");

// const connectionConfig = {
//     database: 'ExampleDB',
//     user: 'postgres',
//     password: 'Qwerty1234',
//     host: 'localhost',
//     port: 5432,
// };

// const db = pgp(connectionConfig);
app.use((req,resp,next)=>{
    resp.setHeader("Access-Control-Allow-Origin","*");
    resp.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-type, Accept");
    resp.setHeader("Access-Control-Allow-Methods","GET, POST, PUT, DELETE");
    next();
});
// app.post("/create",jsonParser, async (req,resp)=>{
//     if(!req.body)
//         resp.sendStatus(404);
//     let username = req.body.name;
//     let userage = req.body.age;
//     userage +=10;
//     resp.json({name: username,age:userage});
// })
app.post("/users", jsonParser, async (req, resp)=>{

    if(!req.body)
        resp.sendStatus(404);

    
    let username = req.body.name;

    let userage = req.body.age;

    await db.none('INSERT INTO Users(name, age) VALUES(${name}, ${age})', {

        name: username,

        age: userage,    

    });

    resp.json({name: username, age: userage});

});
app.get("/users",jsonParser,async (req,resp)=>{
    let data = await db.query('Select * from Users');
    resp.json(data);
})
app.get("/users/:id",jsonParser,async (req,resp)=>{
    let id = req.params.id;
    let data = await db.one(`Select * from Users where id=${id}`);

    resp.json(data);
})
app.delete("/users/:id",jsonParser,async (req,resp)=>{
    let id = req.params.id;
    let result = await db.one(`Delete from Users where id=${id} returning id`);
    result.message="success";
    resp.json(result);
});
app.put("/users/:id",jsonParser,async (req,resp)=>{
    let id = req.params.id;
    if(!id)
        resp.sendStatus(404);
    let user = await db.one(`Select * from Users where id=${id}`);
    if(!user)
        resp.sendStatus(404);
    if(!req.body)
        resp.sendStatus(404);
    if(user.id !== req.body.id)
        resp.sendStatus(404);
    user.name=req.body.name;
    user.age=req.body.age;
    console.log("put")
    await db.none('UPDATE Users set name=${name}, age = ${age}  where id=${id}', {

        name: user.name,

        age: user.age,  
        id: user.id  

    });
    resp.json(user);
})
app.listen(port,()=>{
    console.log(`server starts at port ${port}`)
});