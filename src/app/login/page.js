export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-dark-900">
      <h1 className="text-3xl text-white font-bold mb-4">Login</h1>
      <form className="bg-white rounded-lg p-8 shadow-md">
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-lg text-gray-700 mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            className="block w-full p-4 text-lg text-gray-700 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-lg text-gray-700 mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="block w-full p-4 text-lg text-gray-700 border border-gray-300 rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
}