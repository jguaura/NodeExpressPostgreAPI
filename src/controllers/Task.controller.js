import TaskModel from '../models/Task.model'

export async function getAllTasks (req, res) {
    try {
        const tasks = await TaskModel.findAll({
            order: [
                ['projectid', 'ASC']
            ]
        })
        tasks && res.json({data: tasks})
    } catch (err) {
        console.log(err.message)
    }
}

export async function getOneTask (req, res) {
    const { id } = req.params
    try {
        const task = await TaskModel.findOne({
            where: {
                id: id
            }
        })
        task && res.json({ task })
    } catch (err) {
        console.log(err.message)
    }
}

export async function getTasksByProject (req, res) {
    const { id } = req.params
    try {
        const response = await TaskModel.findAll({
            where: {projectid : id},
            order: [
                ['id', 'ASC']
            ]
        })
        response && res.json({data: response})
    } catch (err) {
        res.json({message: err.message})
    }
}

export async function createTask (req, res) {
    const { name, done, projectid } = req.body
    try {
        const task = await TaskModel.create({
            name,
            done,
            projectid
        }, {
            fields: ['name', 'done', 'projectid']
        })
        task && res.json({ message: 'Task created', data: { name, done, projectid } })
    } catch (err) {
        console.log(err.message)
    }
}

export async function deleteTask (req, res) {
    const { id } = req.params
    try {
        const task = await TaskModel.destroy({
            where: { id : id}
        })
        task && res.json({ message: `Task id: ${id} deleted`})
    } catch (err) {
        console.log(err.message)
    }
}

export async function updateTask (req, res) {
    const { id } = req.params
    const { name, done } = req.body
    try {
        const task = await TaskModel.findAll({
            attributes: ['id', 'name', 'done', 'projectid'],
            where: { id: id }
        })
        task.length > 0
            && task.forEach(async (task) => {
                await task.update({
                    name,
                    done,
                    projectid
                })
            })
        res.json({message: 'Task updated', data: task})
    } catch (err) {
        console.log(err.message)
    }
}