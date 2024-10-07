import React, { useState } from 'react';
import AdminDashboard from './AdminDeshBoard';
import { LoginApiHandle } from '../service/aposAction';

const AdminLoginPage = () => {
  // State to track login and modal visibility
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setNme] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await LoginApiHandle(email,password,name)
    console.log(res);
    
    
    // Mock login validation (you can replace this with actual API call)
    if (res) {
    localStorage.setItem("auth", res.token)
      setIsAuthenticated(true);
      setShowModal(false);
    } else {
      alert('Invalid credentials, please try again!');
    }
  };

  return (
    <>
      {/* Show modal if user is not authenticated */}
      {showModal && (
        <div
          id="authentication-modal"
          tabindex="-1"
          aria-hidden="true"
          className="overflow-y-auto fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-screen flex"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Sign in to Admin Panel
                </h3>
              </div>

              <div className="p-4">
                <form onSubmit={handleLogin} className="space-y-4">
                <div>
                    <label
                      htmlFor="Name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setNme(e.target.value)}
                      required
                    />
                  </div>
                  
                  
                  
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Login to your account
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Show admin dashboard if authenticated */}
      {isAuthenticated && <AdminDashboard />}
    </>
  );
};

export default AdminLoginPage;
