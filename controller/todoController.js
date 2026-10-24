let todos = require("../data/todoData");

// all todos
function getTodos(req, res) {
    try {
        res.status(200).json({
            success: true,
            body: todos,
            message: "All todo fetched"
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: err.message
        })
    }
}

// single todo
function getSingleTodo(req, res) {
    try {
        let todoId = req.params.id;
        let todoObj = todos.find(ele => ele.id === todoId);

        if (!todoObj) {
            res.status(404).json({
                success: false,
                message: "Todo item not found"
            })
        }

        res.status(200).json({
            success: true,
            message: `todo get Fetched with id ${todoId}`,
            body: todoObj
        })
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Network level error",
            error: err.message
        })
    }
}

// create

function createTodo(req, res) {
    try {
        let createdObj = {
            ...req.body,
            id: Date.now().toString()
        }

        todos.push(createdObj);

        res.status(201).json({
            success: true,
            message: `Todo create successfully with id ${createdObj.id}`,
            body: createdObj
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Netwrok Error",
            error: err.message
        })
    }
}

// update todo

function updateTodo(req, res) {
    try {
        let updateId = req.params.id;

        let getIndex = todos.findIndex(ele => ele.id === updateId);

        if (getIndex === -1) {
            return res.status(404).json({
                success: false,
                message: "Todo not found"
            })
        }

        let obj = todos[getIndex];

        let updatedObj = {
            ...obj,
            ...req.body,
            id: updateId
        }

        todos[getIndex] = updatedObj;

        res.status(200).json({
            success: true,
            message: `Todo with id ${updateId} is Updated`,
            body: updatedObj
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Network Error",
            error: err.message
        })
    }
}

// remove Todo

function removeTodo(req, res) {
    try {
        let removeId = req.params.id;
        let getIndex = todos.findIndex(ele => ele.id === removeId);

        if (getIndex === -1) {
            return res.status(404).json({
                success: false,
                message: "todo not found"
            })
        }
        let removeObj = todos.find(ele => ele.id === removeId);

        if (!removeObj) {
            return res.status(404).json({
                success: false,
                message: "Todo is not Found",
            })
        }

        todos.splice(getIndex, 1);

        res.status(200).json({
            success: true,
            message: "todo deleted successfully",
            body: removeObj
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "netwrok issue",
            error: err.message
        })
    }
}

module.exports = {
    getTodos, getSingleTodo, createTodo, updateTodo, removeTodo
}