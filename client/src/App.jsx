import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import PhonePage from './pages/PhonePage';
import PhoneCard from './components/PhoneCard';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/phones' element={<PhonePage />} />
        <Route path='/phone/:id' element={<PhoneCard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
