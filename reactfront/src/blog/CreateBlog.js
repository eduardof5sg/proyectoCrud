import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = 'http://localhost:8000/blogs/'

const CompCreateBlogs = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [imageUrl, setImageUrl] = useState(null); // Cambiado a null en lugar de una cadena vacía
    const navigate = useNavigate();

    const handleImageChange = (e) => {
        setImageUrl(e.target.files[0]); // Corregido: seleccionar el primer archivo del array de archivos
    };

    const store = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('imageUrl', imageUrl);
        
        try {
            await axios.post(URI, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            navigate('/');
        } catch (error) {
            console.error('Error al crear el post:', error);
        }
    }

    return (
        <div>
            <h3>Crear Post</h3>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className='form-label'>Title</label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>    
                <div className="mb-3">
                    <label className='form-label'>Imagen</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Crear</button>
            </form>
        </div>
    );
}

export default CompCreateBlogs;

