import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../contexts/AuthContext";
import { Loader2, ArrowLeft } from "lucide-react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  const [showReset, setShowReset] = useState(false);

  const { login, resetPassword } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/submissions";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }
    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Login error:", error);
      if (error.message.includes("not authorized")) {
        setError("This email is not authorized to access submissions.");
      } else if (error.code === "auth/invalid-credential") {
        setError("Invalid email or password.");
      } else if (error.code === "auth/user-not-found") {
        setError("No account found with this email.");
      } else if (error.code === "auth/wrong-password") {
        setError("Incorrect password.");
      } else if (error.code === "auth/too-many-requests") {
        setError("Too many failed attempts. Please try again later.");
      } else {
        setError("Failed to log in. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email address");
      return;
    }
    try {
      setError("");
      setLoading(true);
      await resetPassword(email);
      setResetSent(true);
      setTimeout(() => {
        setResetSent(false);
        setShowReset(false);
      }, 5000);
    } catch (error) {
      console.error("Reset error:", error);
      setError("Failed to send reset email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClasses =
    "w-full px-4 py-3.5 rounded-lg bg-white/[0.03] backdrop-blur-md border border-white/[0.06] text-white placeholder-gray-600 focus:border-neon-green/30 focus:ring-1 focus:ring-neon-green/10 outline-none transition-all duration-300 text-sm";

  return (
    <div className="min-h-screen bg-dark-950 flex items-center justify-center py-12 px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative max-w-md w-full"
      >
        <div className="rounded-xl backdrop-blur-md bg-white/[0.03] border border-white/[0.06] p-8">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <span className="font-heading text-neon-green font-bold text-3xl">
              D
            </span>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="font-heading text-2xl font-bold text-white mb-2">
              {showReset ? "Reset Password" : "Admin Login"}
            </h2>
            <p className="text-gray-400 text-sm">
              {showReset
                ? "Enter your email to receive a password reset link"
                : "Access form submissions dashboard"}
            </p>
          </div>

          {/* Error */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20"
            >
              <p className="text-red-400 text-sm">{error}</p>
            </motion.div>
          )}

          {/* Success */}
          {resetSent && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20"
            >
              <p className="text-emerald-400 text-sm">
                Password reset email sent! Check your inbox.
              </p>
            </motion.div>
          )}

          {/* Form */}
          <form
            onSubmit={showReset ? handleResetPassword : handleSubmit}
            className="space-y-4"
          >
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@devloft.tech"
                className={inputClasses}
                disabled={loading}
              />
            </div>

            {!showReset && (
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className={inputClasses}
                  disabled={loading}
                />
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-neon-green text-dark-950 font-heading font-semibold hover:bg-neon-lime transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  {showReset ? "Sending..." : "Logging in..."}
                </>
              ) : showReset ? (
                "Send Reset Link"
              ) : (
                "Login"
              )}
            </button>
          </form>

          {/* Toggle */}
          <div className="mt-6 text-center">
            <button
              onClick={() => {
                setShowReset(!showReset);
                setError("");
                setResetSent(false);
              }}
              className="text-neon-green hover:text-neon-lime text-sm font-medium transition-colors inline-flex items-center gap-1"
            >
              {showReset ? (
                <>
                  <ArrowLeft size={14} />
                  Back to Login
                </>
              ) : (
                "Forgot Password?"
              )}
            </button>
          </div>

          {/* Info */}
          <div className="mt-8 pt-6 border-t border-white/[0.06]">
            <p className="text-xs text-gray-500 text-center">
              Only authorized email addresses can access this area. Contact your
              administrator if you need access.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;
