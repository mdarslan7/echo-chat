export default function Login() {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100 text-white">
        <div className="w-full max-w-md p-8 space-y-6 border border-gray-300 rounded-lg bg-white text-black">
          <h2 className="text-2xl font-semibold text-center">Login</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 mt-1 bg-white border border-gray-400 rounded focus:outline-none focus:border-gray-600"
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
                className="w-full p-2 mt-1 bg-white border border-gray-400 rounded focus:outline-none focus:border-gray-600"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 mt-4 bg-black text-white font-medium rounded hover:bg-gray-800"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    );
  }
  