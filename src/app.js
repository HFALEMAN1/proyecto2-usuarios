const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        mesagge: 'Server OK!'
    })
})


const userDB = [{
    id: 1,
    firstName: "Hector",
    lastName: "Falcon",
    email: "hector18falcon@hotmail.com",
    password: "root",
    age: 26
}]

let baseId = 1

//getAllUsers
app.get('/users', (req, res) => {
    res.json(userDB)
})


//getOneUser
app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id)
    const data = userDB.find((item) => id === item.id)

    if (data) {
        res.json(data)
    } else {
        res.status(404).json({
            message: '404 not found'
        })
    }
})

app.post('/users', (req, res) => {
    const data = req.body
    const newUser = {
        id: baseId++,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        age: data.age
    }
    userDB.push(newUser)
    res.status(201).json(newUser)
})



app.listen(9000, () => {
    console.log('Server started ar http://localhost:9000')
})












module.exports = app