

import { BrowserRouter, Route, Routes } from 'react-router';
import { Navbar } from './components/Navbar';
import { LandingPage } from './pages/LandingPage';
import { LoanCalculator } from './pages/LoanCalculator';
import { LoanCategories } from './data/loanCategories';
// import SlipGenerator from './pages/SlipGenerator';
import UserRegister from './pages/UserRegisterPage';
;

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/calculator" element={<LoanCalculator />} />
      <Route path="/loanCategories" element={<LoanCategories/>} /> 
      <Route path="/userRegister" element={<UserRegister />} /> 
    </Routes>
    {/* <SlipGenerator/> */}
  </BrowserRouter>
);

export default App;

