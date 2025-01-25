

import { BrowserRouter, Route, Routes } from 'react-router';
import { Navbar } from './components/Navbar';
import { LandingPage } from './pages/LandingPage';
import { LoanCalculator } from './pages/LoanCalculator';
import { LoginPage } from './pages/LoginPage';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/calculator" element={<LoanCalculator />} />
      <Route path="/login" element={<LoginPage />} /> 
    </Routes>
  </BrowserRouter>
);

export default App;

