const express = require('express'),
    app = express()

app.use(express.static('public'))

app.post('/api', (req, res, next) => {
    console.log(req.query.nome)
    next()
}, (req, res) => {
    res.redirect('/')
})

app.listen(3000, () => {
    console.log('Escutando na porta 3000')
})