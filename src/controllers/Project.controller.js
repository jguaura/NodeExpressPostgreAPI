import ProjectModel from '../models/Project.model'

export async function getProjects (req, res) {
    try {
        const projects = await ProjectModel.findAll()
        projects && res.json({data: projects})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

export async function getProject (req, res) {
    const { id } = req.params
    try {
        const project = await ProjectModel.findOne({
            where: {
                id: id
            }
        })
        project && res.json(project)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

export async function createProject (req, res) {
    const { name, priority, description, deliverydate } = req.body
    try {
        const newProject = await ProjectModel.create({
            name: name,
            priority: priority,
            description: description,
            deliverydate: deliverydate
        },{
            fields: ['name', 'priority', 'description', 'deliverydate']
        })
        newProject && res.json({message: 'Project created', data: newProject})
    } catch (err) {
        res.status(500).json({
            message: err.message,
            data: {}
        })
    }
}

export async function deleteProject (req, res) {
    const { id } = req.params
    try {
        const deleteRowCount = await ProjectModel.destroy({
            where: {
                id: id
            }
        })
        deleteRowCount && res.json({ message: `Project id:${id} Deleted`})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

export async function updateProject (req, res) {
    const { id } = req.params
    const { name, priority, description, deliverydate } = req.body
    try {
        const projects = await ProjectModel.findAll({
            attributes: ['id', 'name', 'priority', 'description', 'deliverydate'],
            where: {
                id: id
            }
        })

        projects.length > 0
            && projects.forEach(async (project) => {
                await project.update({
                    name,
                    priority,
                    description,
                    deliverydate
                })
            })

        res.json({ message: 'Project Updated', data: {projects} })
    } catch (err) {

    }
}