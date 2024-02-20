import BlogModel from "../models/BlockModel.js";
import { uploadImage } from "../middleware/Upload.js";
// Mostrar todos los registros

export const getAllBlogs = async(req, res) => {
    try {
       const blogs = await BlogModel.findAll()
       res.json(blogs)
    } catch (error) {
        res.json( {message: error.message})
    }
}

// Mostrar un registro 


export const getBlog = async(req, res) => {
    try {
       const blog = await BlogModel.findAll({
                        where: {
                            id: req.params.id
                        }
       })
       res.json(blog[0])
    } catch (error) {
        res.json( {message: error.message})
    }
}

export const createBlog = async (req, res) => {
    try {
        // Ejecuta uploadImage para manejar la carga de la imagen
        uploadImage(req, res, async function (err) {
            if (err) {
                return res.status(400).json({ message: err.message });
            }
            try {
                // Crea el registro del blog con la URL de la imagen
                const imageUrl = req.file ? req.file.path.replace(/\\/g, '/') : null;
                const newBlog = await BlogModel.create({
                    title: req.body.title,
                    content: req.body.content,
                    imageUrl: imageUrl
                });
                res.json({
                    message: "¡Registro creado correctamente!",
                    blog: newBlog
                });
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


// Actualizar registro 

export const updateBlog = async (req, res) => {
    try {
        await BlogModel.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            "message":  "!Registro actualizado correctamente"
           })

    } catch (error) {
        res.json( {message: error.message})        
    }
}

// Eliminar un registro

export const deleteBlog = async (req, res) => {
    try {
        await BlogModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            "message":  "!Registro eliminado correctamente"
           })

    } catch (error) {
        res.json( {message: error.message})        
    }
}