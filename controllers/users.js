const uuid = require('uuid').v4

const MOCK_USERS = [
  {
    id: uuid(),
    name: "El Alets",
    country: "Mexico"
  }
]

const getAllUsers = (req,res) => {
  console.log("Users")

  res.status(200).json({
    success: true,
    data: {
      users: MOCK_USERS
    }
  })
}

const saveUser = (req,res) => {
  const body = req.body
  console.log(body)

  // TODO: Send user to DB
  const newUser = {
    id: uuid(),
    name: body.name,
    country: body.country
  }

  MOCK_USERS.push(newUser)

  res.status(201).json({
    success: true,
    data: {
      user: newUser
    }
  })
}

module.exports = {
  getAllUsers, saveUser
}