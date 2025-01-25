// src/components/LoanCard.tsx
import { Link } from 'react-router-dom';

export const LoanCard = ({ name, subcategories }) => (
  <div className="bg-gray-100 p-4 rounded shadow">
    <h2 className="text-xl font-bold">{name}</h2>
    <ul className="list-disc pl-6 mt-2">
      {subcategories.map((sub, index) => (
        <li key={index}>{sub}</li>
      ))}
    </ul>
    <Link to="/calculator" className="text-blue-500 mt-4 inline-block">
      Apply Now
    </Link>
  </div>
);
