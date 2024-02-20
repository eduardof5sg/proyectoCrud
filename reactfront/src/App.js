
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompShowBlogs from './blog/ShowBlog';
import CompCreateBlogs from './blog/CreateBlog';
import CompEditBlogs from './blog/EditBlog';
import BarraNavegacion from './componentes/navbar';
import PaginaPrincipal from './pages/paginaPrincipal';
import Contacto from './pages/contacto/contacto';



function App() {
  return (
    <BrowserRouter>
    <BarraNavegacion />
      <Routes>        
        <Route path='/' element={<PaginaPrincipal />} />
        <Route path='/blogs' element={<CompShowBlogs />} />
        <Route path='/create' element={<CompCreateBlogs  />} />
        <Route path='/edit/:id' element={<CompEditBlogs  />} />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
