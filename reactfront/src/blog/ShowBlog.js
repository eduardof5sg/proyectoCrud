import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../blog/showblog.css';

const URI = 'http://localhost:8000/blogs/';

const CompShowBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState({});
    const [searchTerm, setSearchTerm] = useState('');
    const modalRef = useRef(null);

    useEffect(() => {
        getBlogs();
        
       
    }, []);

    const getBlogs = async () => {
        const res = await axios.get(URI);
        setBlogs(res.data);
    };

    const deleteBlog = async (id) => {
        axios.delete(`${URI}${id}`);
        getBlogs();
    };

    const openModal = (blog) => {
        setSelectedBlog(blog);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredBlogs = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className='container'>
                <div className='col'>
                    <div className='text-center'> {/* Centro del contenido */}
                        <Link to="/create" className='btn btn-dark mt-2 mb-2'><i className="fa-solid fa-plus"></i></Link>
                        <input
                            type="text"
                            className="form-control mt-2 mb-2"
                            placeholder="Buscar por título"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </div>
                    <div className='row'>
                        {filteredBlogs.map((blog) => (
                            <div key={blog.id} className='col-md-4 mb-4'>
                                <div className='card'>
                                    <img src={`http://localhost:8000/${blog.imageUrl}`} className='card-img-top' alt='Imagen del blog' onClick={() => openModal(blog)} />
                                    <div className='card-body'>
                                        <h5 className='card-title'>{blog.title}</h5>
                                        <Link to={`/edit/${blog.id}`} className='btn btn-dark'>Editar</Link>
                                        <button onClick={() => deleteBlog(blog.id)} className='btn btn-danger ml-2'>Borrar</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {modalOpen && (
                <div className="modal-overlay" ref={modalRef}>
                    <div className="modal-content">                       
                         <img src={`http://localhost:8000/${selectedBlog.imageUrl}`} alt='Imagen del blog' />
                         <p>{selectedBlog.content}</p>
                         <span className="close" onClick={closeModal}>&times;</span>
                                              
                    </div>
                </div>
            )}
        </div>
    );
};
export default CompShowBlogs;
