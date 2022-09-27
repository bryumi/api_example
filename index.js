const express = require('express');
const cors = require('cors');
const { request } = require('http');
const { response } = require('express');

const app = express();

app.listen(5500, ()=>{
    console.log ('server runing 5500 🚀')
});

app.use(cors())

app.use(express.json())

let users = [
    {
        id:1,
        name: "Bruna Yumi",
        city: "São Paulo",
        country: "Brazil"

    }
]

app.route('/api').get((req, res) => res.json({users}))
  
app.route('/api/:id').get((request, response) => {
    const userId = request.params.id;

    const user = users.find(user => Number(user.id)===Number(userId));

    if (!user){
        return response.json('User not found!')
    }

    response.json(user)
})

app.route('/api').post((request, response) => {
    const lastId = users[users.length - 1].id;

    users.push({
        id:lastId + 1,
        name: request.body.name,
        city: request.body.city,
        country: request.body.country
    })

    response.json('Saved user')
})

app.route('/api/:id').put((request, response) =>{
    const userId  = request.params.id;

    const user = users.find(user => Number(user.id) === Number(userId));
    
    if (!user){
        return response.json('User not found!')
    }

    const updateUser = {
        ...user,
        name: request.body.name,
        city: request.body.city,
        country: request.body.country
    }

    users = users.map(user => {
        if(Number(user.id) === Number(userId)) {
            user = updateUser
        }
        return user
    })
    response.json("Updated user")
});

app.route('api/:id').delete((request, response) => {
    const userId = request.params.id;
    users.filter = (user => Number(user.id) !== Number(userId));

    response.json('Deleted User!')
})