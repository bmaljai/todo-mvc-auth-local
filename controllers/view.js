const Todo = require('../models/Todo')

module.exports = {
    getData: async (req,res) => {
        const data = await Todo.find()
        res.json(data)
    }
}