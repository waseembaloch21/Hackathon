import { Link } from "react-router";

export const LandingPage = () => {
  const loanCategories = [
    { name: 'Wedding Loans', subcategories: ['Valima', 'Furniture', 'Valima Food', 'Jahez'] },
    { name: 'Home Construction Loans', subcategories: ['Structure', 'Finishing'] },
    { name: 'Business Startup Loans', subcategories: ['Buy Stall', 'Shop Machinery'] },
    { name: 'Education Loans', subcategories: ['University Fees', 'Child Fees Loan'] },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Loan Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loanCategories.map((category, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded shadow">
            <h2 className="text-xl font-bold">{category.name}</h2>
            <ul className="list-disc pl-6 mt-2">
              {category.subcategories.map((sub, subIndex) => (
                <li key={subIndex}>{sub}</li>
              ))}
            </ul>
            <Link to="/calculator" className="text-blue-500 mt-4 inline-block">Apply Now</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
