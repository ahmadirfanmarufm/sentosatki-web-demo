import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const LoginModal = ({ isOpen, closeModal }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loadingSubmitLogin, setLoadingSubmitLogin] = useState(false);
  const apiDatabaseUrl = import.meta.env.VITE_API_DATABASE;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingSubmitLogin(true);
    setError('');

    try {
      const response = await axios.post(
        `${apiDatabaseUrl}/login`,
        {
          username,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (!response.status === 200) {
        const errorData = await response.data;
        setLoadingSubmitLogin(false);
        throw new Error(errorData.message);
      }

      const data = await response.data;
      localStorage.setItem('token', data.token);
      window.location.href = '/';
      closeModal();
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError(error.message);
      }
    } finally {
      setLoadingSubmitLogin(false);
    }
  };

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={closeModal}
        className="fixed inset-0 z-50 flex items-center justify-center"
      >
        <DialogBackdrop className="fixed inset-0 bg-black opacity-50" />
        <DialogPanel className="relative w-full max-w-xs sm:max-w-md md:max-w-lg xl:max-w-2xl my-6 mx-auto bg-white rounded-lg shadow-lg">
          {/* Header */}
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
            <DialogTitle className="text-2xl sm:text-3xl font-semibold text-gray-800">
              Login
            </DialogTitle>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-gray-800 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={closeModal}
            >
              <span className="bg-transparent text-gray-800 h-6 w-6 text-2xl block outline-none focus:outline-none hover:text-gray-900">
                ×
              </span>
            </button>
          </div>
          {/* Body */}
          <div className="relative p-6 flex-auto">
            <form className="space-y-4" onSubmit={handleSubmit}>
              {error && <div className="text-red-500 text-sm">{error}</div>}
              <div>
                <label
                  className="block text-left text-gray-800 text-sm font-semibold mb-2"
                  htmlFor="username"
                >
                  Username / Email / No. Handphone
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-3 py-2 text-gray-800 bg-gray-100 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Masukkan Username / Email / No. Handphone"
                  required
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label
                    className="block text-left text-gray-800 text-sm font-semibold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <Link
                    to="/pemulihan-akun"
                    className="text-primary-secondary-800 hover:text-primary-secondary-800 text-sm font-semibold mb-2 block"
                  >
                    Kendala Pada Akun ?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 text-gray-800 bg-gray-100 rounded border border-gray-300"
                    placeholder="Masukkan Password"
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 px-3 text-gray-700 focus:outline-none"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </button>
                </div>
              </div>
              {/* Footer */}
              <div className="flex flex-col items-center p-6 border-t border-solid border-gray-300 rounded-b">
                <button
                  className="bg-primary-secondary-800 text-white active:bg-primary-secondary-900 font-bold uppercase text-sm w-full w-auto px-10 py-3 rounded-md shadow hover:shadow-lg hover:bg-primary-secondary-900 outline-none focus:outline-none mb-4"
                  type="submit"
                  disabled={loadingSubmitLogin}
                  style={{ transition: 'all .15s ease' }}
                >
                  {loadingSubmitLogin ? (
                    <div className="flex flex-col justify-center items-center">
                      <svg
                        className="animate-spin h-5 w-5 mr-3 border-t-2 border-b-2 border-white rounded-full"
                        viewBox="0 0 24 24"
                      ></svg>
                    </div>
                  ) : (
                    'Login'
                  )}
                </button>
                <Link
                  to="/bantuan"
                  className="text-gray-500 hover:text-gray-600 text-md font-semibold"
                >
                  Pusat Bantuan
                </Link>
              </div>
            </form>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
};

LoginModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default LoginModal;
