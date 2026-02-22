import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  const [showReset, setShowReset] = useState(false);

  const { login, resetPassword } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/submissions';

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    try {
      setError('');
      setLoading(true);
      await login(email, password);
      navigate(from, { replace: true });
    } catch (error) {
      console.error('Login error:', error);
      if (error.message.includes('not authorized')) {
        setError('This email is not authorized to access submissions.');
      } else if (error.code === 'auth/invalid-credential') {
        setError('Invalid email or password.');
      } else if (error.code === 'auth/user-not-found') {
        setError('No account found with this email.');
      } else if (error.code === 'auth/wrong-password') {
        setError('Incorrect password.');
      } else if (error.code === 'auth/too-many-requests') {
        setError('Too many failed attempts. Please try again later.');
      } else {
        setError('Failed to log in. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }

    try {
      setError('');
      setLoading(true);
      await resetPassword(email);
      setResetSent(true);
      setTimeout(() => {
        setResetSent(false);
        setShowReset(false);
      }, 5000);
    } catch (error) {
      console.error('Reset error:', error);
      setError('Failed to send reset email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-blue-700 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-3xl">D</span>
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#0a1f44] mb-2">
              {showReset ? 'Reset Password' : 'Admin Login'}
            </h2>
            <p className="text-gray-600">
              {showReset 
                ? 'Enter your email to receive a password reset link' 
                : 'Access form submissions dashboard'}
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          {/* Success Message */}
          {resetSent && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-700 text-sm">
                Password reset email sent! Check your inbox.
              </p>
            </div>
          )}

          {/* Login/Reset Form */}
          <form onSubmit={showReset ? handleResetPassword : handleSubmit}>
            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@devloft.tech"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                disabled={loading}
              />
            </div>

            {/* Password (only for login) */}
            {!showReset && (
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  disabled={loading}
                />
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {showReset ? 'Sending...' : 'Logging in...'}
                </>
              ) : (
                showReset ? 'Send Reset Link' : 'Login'
              )}
            </button>
          </form>

          {/* Toggle Reset/Login */}
          <div className="mt-6 text-center">
            <button
              onClick={() => {
                setShowReset(!showReset);
                setError('');
                setResetSent(false);
              }}
              className="text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              {showReset ? '← Back to Login' : 'Forgot Password?'}
            </button>
          </div>

          {/* Info */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              Only authorized email addresses can access this area. Contact your administrator if you need access.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
