const express = require('express'),
    bp = require('body-parser'),
    app = express()

app.use(bp.urlencoded({
    extend: true
}))
app.use(express.static('public'))

app.post('/api', (req, res, next) => {
    console.log(req.body.nome, req.body.idade)
    next()
}, (req, res) => {
    res.redirect('/')
})

app.listen(3000, () => {
    console.log('Escutando na porta 3000')
})