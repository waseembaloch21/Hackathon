// src/components/LoanCalculator.tsx
import { useState } from 'react';
import { loanCategories } from '../data/loanCategories';

export const LoanCalculator = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [deposit, setDeposit] = useState(0);
  const [loanPeriod, setLoanPeriod] = useState(1);
  const [calculatedLoan, setCalculatedLoan] = useState(0);

  const handleCalculate = () => {
    const category = loanCategories.find((cat) => cat.name === selectedCategory);
    if (!category) return;

    const maxLoan = category.maxLoan === 'Based on Requirement' ? 0 : category.maxLoan;
    const loanAmount = maxLoan - deposit;
    setCalculatedLoan(loanAmount > 0 ? loanAmount : 0);
  };

  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Loan Calculator</h2>
      <div className="mb-3">
        <label className="block text-gray-700">Select Category:</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full border p-2 rounded"
        >
          <option value="">--Select--</option>
          {loanCategories.map((cat, idx) => (
            <option key={idx} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      {selectedCategory && (
        <div className="mb-3">
          <label className="block text-gray-700">Select Subcategory:</label>
          <select
            value={subcategory}
            onChange={(e) => setSubcategory(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option value="">--Select--</option>
            {loanCategories
              .find((cat) => cat.name === selectedCategory)
              ?.subcategories.map((sub, idx) => (
                <option key={idx} value={sub}>
                  {sub}
                </option>
              ))}
          </select>
        </div>
      )}

      <div className="mb-3">
        <label className="block text-gray-700">Initial Deposit:</label>
        <input
          type="number"
          value={deposit}
          onChange={(e) => setDeposit(Number(e.target.value))}
          className="w-full border p-2 rounded"
        />
      </div>

      <div className="mb-3">
        <label className="block text-gray-700">Loan Period (years):</label>
        <input
          type="number"
          value={loanPeriod}
          onChange={(e) => setLoanPeriod(Number(e.target.value))}
          className="w-full border p-2 rounded"
          min="1"
        />
      </div>

      <button
        onClick={handleCalculate}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Calculate
      </button>

      {calculatedLoan > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-bold">Calculated Loan:</h3>
          <p>
            <strong>{calculatedLoan} PKR</strong>
          </p>
        </div>
      )}
    </div>
  );
};
