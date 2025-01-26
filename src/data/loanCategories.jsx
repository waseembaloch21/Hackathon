// src/data/loanCategories.ts
export const loanCategories = [
    {
      name: 'Wedding Loans',
      subcategories: ['Valima', 'Furniture', 'Valima Food', 'Jahez'],
      maxLoan: 500000,
      period: 3,
    },
    {
      name: 'Home Construction Loans',
      subcategories: ['Structure', 'Finishing', 'Loan'],
      maxLoan: 1000000,
      period: 5,
    },
    {
      name: 'Business Startup Loans',
      subcategories: ['Buy Stall', 'Advance Rent for Shop', 'Shop Assets', 'Shop Machinery'],
      maxLoan: 1000000,
      period: 5,
    },
    {
      name: 'Education Loans',
      subcategories: ['University Fees', 'Child Fees Loan'],
      maxLoan: 'Based on Requirement',
      period: 4,
    },
  ];

export  const LoanCategories = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Available Loan Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loanCategories.map((category, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-lg">
            <h2 className="text-xl font-semibold">{category.name}</h2>
            <p className="text-gray-600">
              Maximum Loan: <strong>{category.maxLoan}</strong>
            </p>
            <p className="text-gray-600">
              Loan Period: <strong>{category.period} years</strong>
            </p>
            <h3 className="mt-2 font-medium">Subcategories:</h3>
            <ul className="list-disc list-inside">
              {category.subcategories.map((sub, i) => (
                <li key={i}>{sub}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

  