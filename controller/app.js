const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const app = express()
const port = 5000

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())



const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'reporter'
})


app.get('',(req,res) => {

    pool.getConnection((err,connection)=> {
        if(err) throw err
        console.log(`connection as id: ${connection.threadId}`)
        connection.query('SELECT * from berita',(err,rows)=> {
            connection.release()
            !err?res.send(rows): console.log(err)
    })

            
    })
})



app.get('/:id',(req,res) => {

    pool.getConnection((err,connection)=> {
        if(err) throw err
        console.log(`connection as id: ${connection.threadId}`)
        connection.query('SELECT * from akun WHERE id = ?',[req.params.id],(err,rows)=> {
            connection.release()
            !err?res.send(rows): console.log(err)
    })

            
    })
})

app.delete('/:id',(req,res) => {

    pool.getConnection((err,connection)=> {
        if(err) throw err
        console.log(`connection as id: ${connection.threadId}`)
        connection.query('DELETE  from akun WHERE id = ?',[req.params.id],(err,rows)=> {
            connection.release()
            !err?res.send(`account with record name ${req.params.username} has been deleted`): console.log(err)
    })

            
    })
})

app.post('',(req,res) => {

    pool.getConnection((err,connection)=> {
        if(err) throw err
        console.log(`connection as id: ${connection.threadId}`)
        let params=req.body
        connection.query('INSERT INTO berita SET ?',params,(err,rows)=> {
            connection.release()
            !err?res.send(`account with record name ${params.judul} has been created`): console.log(err)
    })

            
    })
})

app.put('',(req,res) => {

    pool.getConnection((err,connection)=> {
        if(err) throw err
        console.log(`connection as id: ${connection.threadId}`)
        let {username,id}=req.body
        connection.query('UPDATE akun SET username = ? WHERE id =  ?',[username,id],(err,rows)=> {
            connection.release()
            !err?res.send(`account with record name ${username} has been changed`): console.log(err)
    })

            
    })
})





app.listen(port, () => console.log(`listening on port ${port}`))