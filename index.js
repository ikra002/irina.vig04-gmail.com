const express = require('express')
const { default: mongoose } = require('mongoose')
const mondoose = require('mongoose')
const path=require('path')
const exphbs = require('express-handlebars')
const todosRoutes = require('./routes/todos.js')

const PORT = process.env.PORT || 3000

const app = express()
const hbs = exphbs.create({
    defaultLayout:'main',
    extname:"hbs"
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views','views')

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')))

app.use(todosRoutes)

mongoose.connect('mongodb+srv://irinavig04:testpass@monogo-node-app.ofoewil.mongodb.net/todos')

app.listen(PORT,() => {
    console.log('Server has been started...')
})