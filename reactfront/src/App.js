
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CompShowBlogs from './blog/ShowBlog';
import CompCreateBlogs from './blog/CreateBlog';
import CompEditBlogs from './blog/EditBlog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CompShowBlogs />} />
        <Route path='/create' element={<CompCreateBlogs  />} />
        <Route path='/edit/:id' element={<CompEditBlogs  />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
