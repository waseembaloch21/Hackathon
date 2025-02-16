
import { useForm } from "react-hook-form";

export const LoginPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-100 p-6 rounded shadow">
        <div className="mb-4">
          <label className="block font-bold">Email:</label>
          <input
            type="email"
            {...register('email')}
            className="w-full mt-2 p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold">Password:</label>
          <input
            type="password"
            {...register('password')}
            className="w-full mt-2 p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  );
};
