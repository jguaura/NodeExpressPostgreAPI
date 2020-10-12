import express, { json } from 'express'
import morgan from 'morgan' 

// Routes imports
import projectRoutes from './routes/projects'
import taskRoutes from './routes/tasks'

// Initialization
const app = express()

// Middlewares
app.use(morgan('dev'))
app.use(json())

// Routes Use
app.use('/api/projects', projectRoutes)
app.use('/api/tasks', taskRoutes)

export default app