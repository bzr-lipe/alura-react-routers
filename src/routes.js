import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SobreMim from './pages/SobreMim';
import Post from './pages/Post';
import Menu from './components/Menu';
import Footer from './components/Footer';
import DefaultTemplate from './templates/DefaultTemplate';
import NotFound from './pages/NotFound';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<DefaultTemplate />}>
          <Route index element={<HomePage />}/>
          <Route path='/sobremim' element={<SobreMim />}/>
          <Route path='/posts/:id' element={<Post />}/>
        </Route>
        <Route path='*' element={<NotFound />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
