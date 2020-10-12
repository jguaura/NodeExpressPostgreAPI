import { Router } from 'express'
const router = Router()

import { getAllTasks, createTask, getOneTask, getTasksByProject, deleteTask, updateTask } from '../controllers/Task.controller'

router.get('/', getAllTasks)
router.get('/:id', getOneTask)
router.get('/byproject/:id', getTasksByProject)
router.post('/', createTask)
router.delete('/:id', deleteTask)
router.put('/:id', updateTask)

export default router