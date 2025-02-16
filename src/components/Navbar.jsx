import { Link } from "react-router";


export const Navbar = () => (
  <nav className="bg-blue-600 text-white py-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-xl font-bold">Loan Management</h1>
      <div>
        <Link to="/" className="px-4">Home</Link>
        <Link to="/calculator" className="px-4">Loan Calculator</Link>
        <Link to="/loanCategories" className="px-4">Loan Categories</Link>
        <Link to="/userRegister" className="px-4">Register</Link>
      </div>
    </div>
  </nav>
);
