import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'


const URI = 'http://localhost:8000/blogs/'


const CompShowBlogs = () => {
    const [blogs, setBlog] = useState([])
    useEffect( ()=>{
        getBlogs()
        
    },[])

    const getBlogs = async () => {
        const res = await axios.get(URI)
        setBlog(res.data)

    }

    const deleteBlog = async (id) =>{
        axios.delete(`${URI}${id}`)
        getBlogs()

    }
   
    return (
        <div>
            <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-plus"></i></Link>
            <div className='container'>
                <div className='row'>
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-4 mb-4'>
                            <div className='card'>
                                <img src={`http://localhost:8000/${blog.imageUrl}`} className='card-img-top' alt='Imagen del blog' />
                                <div className='card-body'>
                                    <h5 className='card-title'>{blog.title}</h5>
                                    <p className='card-text'>{blog.content}</p>
                                    <Link to={`/edit/${blog.id}`} className='btn btn-info'>Editar</Link>
                                    <button onClick={() => deleteBlog(blog.id)} className='btn btn-danger ml-2'>Borrar</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>    
    );
}    
export default CompShowBlogs

