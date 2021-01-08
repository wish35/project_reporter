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


//ambil berita berdasarkan id
app.get('/:id',(req,res) => {

    pool.getConnection((err,connection)=> {
        if(err) throw err
        console.log(`connection as id: ${connection.threadId}`)
        connection.query('SELECT * from berita WHERE id = ?',[req.params.id],(err,rows)=> {
            connection.release()
            !err?res.send(rows): console.log(err)
    })

            
    })
})


//delete berita
app.delete('/:id',(req,res) => {

    pool.getConnection((err,connection)=> {
        if(err) throw err
        console.log(`connection as id: ${connection.threadId}`)
        connection.query('DELETE  from berita WHERE id = ?',[req.params.id],(err,rows)=> {
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

app.post('/login',(req,res) => {

    pool.getConnection((err,connection)=> {
        if(err) throw err
        console.log(`connection as id: ${connection.threadId}`)
        let {username,pass}=req.body
        connection.query('SELECT * FROM akun WHERE username = ? AND pass = ?',[username,pass],(err,rows)=> {
            connection.release()
            !err?res.send(`login success`): res.send('login failed')
    })

            
    })
})



app.put('',(req,res) => {

    pool.getConnection((err,connection)=> {
        if(err) throw err
        console.log(`connection as id: ${connection.threadId}`)
        let {body,judul,id}=req.body
        connection.query('UPDATE berita SET body = ? ,judul = ? WHERE id =  ?',[body,judul,id],(err,rows)=> {
            connection.release()
            !err?res.send(`account with record name ${username} has been changed`): console.log(err)
    })

            
    })
})





app.listen(port, () => console.log(`listening on port ${port}`))