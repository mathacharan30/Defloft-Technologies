import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { ShieldX } from "lucide-react";

function ProtectedRoute({ children }) {
  const { currentUser, isAuthorized } = useAuth();
  const location = useLocation();

  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center py-12 px-4 relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[128px]" />
        </div>
        <div className="relative max-w-md w-full bg-dark-800 border border-white/[0.06] rounded-2xl p-8 text-center">
          <div className="w-16 h-16 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-5">
            <ShieldX size={32} className="text-red-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Access Denied</h2>
          <p className="text-gray-400 text-sm mb-8">
            Your email (
            <span className="text-gray-300">{currentUser.email}</span>) is not
            authorized to access this area.
          </p>
          <button
            onClick={() => (window.location.href = "/")}
            className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-gradient-to-r from-accent-purple to-accent-cyan text-white font-semibold hover:shadow-lg hover:shadow-accent-purple/20 transition-all"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return children;
}

export default ProtectedRoute;
