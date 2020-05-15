const express = require('express')
const mongoose = require('mongoose')

const items = require('./routes/api/items')

const app = express()


app.use(express.json())


//database connection
const db = require('./config/keys').mongoURI
mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => {
    console.log('MongoDB connected!')
})
.catch((error) => {
    console.log(error)
})


//use Routes
app.use('/api/items', items)


//Port
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})