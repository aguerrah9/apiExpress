// core and third-party modules
const express = require('express');

// local modules
const usersRouter = require('./routes/users')

const app = express()

// Add listener
app.listen(3500, () => {
  console.log("Listening")
})

app.use(express.json())
// Routes
app.use('/api/v1/users', usersRouter)