import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SobreMim from './pages/SobreMim';
import Menu from './components/Menu';
import Footer from './components/Footer';
import DefaultTemplate from './templates/DefaultTemplate/index';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<DefaultTemplate />}>
          <Route index element={<HomePage />}/>
          <Route path='/sobremim' element={<SobreMim />}/>
        </Route>
        <Route path='*' element={<SobreMim />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
