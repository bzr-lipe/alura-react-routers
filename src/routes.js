import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SobreMim from './pages/SobreMim';
import Menu from './components/Menu';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/sobremim' element={<SobreMim />}/>
        <Route path='*' element={<SobreMim />}/>
      </Routes>
    </BrowserRouter>
  );
}
