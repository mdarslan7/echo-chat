export default function SignUp() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="w-full max-w-md p-8 space-y-6 border border-gray-700 rounded-lg">
        <h2 className="text-2xl font-semibold text-center">Sign Up</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 mt-1 bg-black border border-gray-600 rounded focus:outline-none focus:border-gray-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 mt-1 bg-black border border-gray-600 rounded focus:outline-none focus:border-gray-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 mt-4 bg-white text-black font-medium rounded hover:bg-gray-200"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}