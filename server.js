const cors = require('cors')
const express = require('express')
const app = express()
const axios  = require('axios')

// ultilizando cors para o controle de acesso
app.use(cors())

// rota 
app.get('/', async(req, res) => {
    try {
        // resonse é a resopsta do axios Mas eu tiro o data de dentro response
        const {data} = await axios('https://jsonplaceholder.typicode.com/users')
      
        // mostrar no fron-end
        return res.json(data)
        

        //mostrar no back-end
        // console.log(data)
        
    } catch (error) {
        console.log(error)
        
    }


        // resposta da Api (res)
        // return res.json([
        //     {name: 'Rafael'},
        //     {name: 'Fernando'}

        // ])
        
})

// porta
app.listen('4567')
console.log("conexão estabelecida!")
