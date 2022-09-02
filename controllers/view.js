const Todo = require('../models/Todo')
const User = require('../models/User')

module.exports = {
    getMemes: async (req,res) => {
        const data = await Todo.find()
        res.json(data)
    },
    getUsers: async (req,res) => {
        const data = await User.find()
        res.json(data)
    }
}