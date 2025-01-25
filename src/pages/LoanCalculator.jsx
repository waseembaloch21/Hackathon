
import { useState } from 'react';

export const LoanCalculator = () => {
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [deposit, setDeposit] = useState<number | ''>('');
  const [period, setPeriod] = useState<number>(1);
  const [result, setResult] = useState<number | null>(null);

  const calculateLoan = () => {
    if (deposit !== '' && period) {
      const totalLoan = (Number(deposit) * (1 + 0.05 * period)).toFixed(2);
      setResult(Number(totalLoan));
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Loan Calculator</h1>
      <div className="bg-gray-100 p-6 rounded shadow">
        <div className="mb-4">
          <label className="block font-bold">Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full mt-2 p-2 border rounded"
          >
            <option value="">Select Category</option>
            <option value="Wedding">Wedding Loans</option>
            <option value="Home">Home Construction Loans</option>
            <option value="Business">Business Startup Loans</option>
            <option value="Education">Education Loans</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block font-bold">Subcategory:</label>
          <input
            type="text"
            value={subcategory}
            onChange={(e) => setSubcategory(e.target.value)}
            className="w-full mt-2 p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold">Initial Deposit (PKR):</label>
          <input
            type="number"
            value={deposit}
            onChange={(e) => setDeposit(e.target.value ? parseFloat(e.target.value) : '')}
            className="w-full mt-2 p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold">Loan Period (Years):</label>
          <input
            type="number"
            value={period}
            onChange={(e) => setPeriod(parseInt(e.target.value))}
            className="w-full mt-2 p-2 border rounded"
          />
        </div>
        <button
          onClick={calculateLoan}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Calculate
        </button>
        {result !== null && (
          <div className="mt-4 text-lg font-bold">
            Estimated Loan: PKR {result}
          </div>
        )}
      </div>
    </div>
  );
};
