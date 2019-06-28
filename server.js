const express = require('express')
const multer = require('multer')
const cors = require('cors')
const app = express()
const upload = multer({dest: 'uploads/'})

function profileHandler(req, res){
    console.log(req.body.avatar)
    console.log(req.file)
    res.status(200).end()
}

app.post('/profile', upload.single('avatar'),profileHandler)


app.use(cors())

app.listen(9000)
