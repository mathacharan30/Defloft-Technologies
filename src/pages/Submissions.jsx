import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { getSubmissions, clearSubmissions, exportSubmissions } from '../data/submissions';
import { useAuth } from '../contexts/AuthContext';
import { RefreshCw, Download, Trash2, LogOut, Inbox, Loader2, AlertTriangle, Mail, Phone, Building2, MessageSquare, User } from 'lucide-react';

function Submissions() {
  const [submissions, setSubmissions] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(true);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    loadSubmissions();
  }, []);

  const loadSubmissions = async () => {
    setLoading(true);
    try {
      const data = await getSubmissions();
      setSubmissions(data);
    } catch (error) {
      console.error('Error loading submissions:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleClear = async () => {
    try {
      await clearSubmissions();
      setSubmissions([]);
      setShowConfirm(false);
    } catch (error) {
      console.error('Error clearing submissions:', error);
      alert('Failed to clear submissions. Please try again.');
    }
  };

  const handleExport = async () => {
    await exportSubmissions();
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Header */}
      <div className="relative border-b border-white/[0.06]">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/5 to-accent-cyan/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white mb-1">Form Submissions</h1>
              <p className="text-gray-400 text-sm">View and manage contact form submissions</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-xs text-gray-500">Logged in as</p>
                <p className="text-sm font-medium text-gray-300">{currentUser?.email}</p>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-gray-300 hover:text-white hover:bg-white/[0.08] transition-all text-sm"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Action Buttons */}
        <div className="mb-6 flex flex-wrap gap-3">
          <button
            onClick={loadSubmissions}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-purple/10 border border-accent-purple/20 text-accent-purple hover:bg-accent-purple/20 transition-all text-sm font-medium"
          >
            <RefreshCw size={16} />
            Refresh
          </button>

          {submissions.length > 0 && (
            <>
              <button
                onClick={handleExport}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 transition-all text-sm font-medium"
              >
                <Download size={16} />
                Export JSON
              </button>

              <button
                onClick={() => setShowConfirm(true)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 transition-all text-sm font-medium"
              >
                <Trash2 size={16} />
                Clear All
              </button>
            </>
          )}
        </div>

        {/* Confirmation Modal */}
        <AnimatePresence>
          {showConfirm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-dark-800 border border-white/[0.08] rounded-2xl p-8 max-w-md w-full"
              >
                <div className="w-14 h-14 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-5">
                  <AlertTriangle size={28} className="text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-2">Clear All Submissions?</h3>
                <p className="text-gray-400 text-center text-sm mb-8">This action cannot be undone. All form submissions will be permanently deleted.</p>
                <div className="flex gap-3">
                  <button
                    onClick={handleClear}
                    className="flex-1 bg-red-500 text-white px-6 py-3 rounded-xl hover:bg-red-600 transition-colors font-semibold text-sm"
                  >
                    Yes, Clear All
                  </button>
                  <button
                    onClick={() => setShowConfirm(false)}
                    className="flex-1 bg-white/[0.06] border border-white/[0.08] text-gray-300 px-6 py-3 rounded-xl hover:bg-white/[0.1] transition-colors font-semibold text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Count */}
        <div className="mb-6">
          <p className="text-gray-400 text-sm">
            Total Submissions: <span className="font-bold text-white">{submissions.length}</span>
          </p>
        </div>

        {/* Submissions List */}
        {loading ? (
          <div className="text-center py-20 bg-dark-800 rounded-2xl border border-white/[0.06]">
            <Loader2 size={48} className="animate-spin text-accent-purple mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Loading submissions...</h3>
            <p className="text-gray-500 text-sm">Please wait while we fetch the data</p>
          </div>
        ) : submissions.length === 0 ? (
          <div className="text-center py-20 bg-dark-800 rounded-2xl border border-white/[0.06]">
            <Inbox size={64} className="text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No submissions yet</h3>
            <p className="text-gray-500 text-sm">Form submissions will appear here</p>
          </div>
        ) : (
          <div className="space-y-4">
            {submissions.map((submission, index) => (
              <motion.div
                key={submission.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-dark-800 rounded-2xl border border-white/[0.06] p-6 hover:border-white/[0.12] transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center">
                      <User size={18} className="text-accent-purple" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{submission.fullName}</h3>
                      <p className="text-xs text-gray-500">{formatDate(submission.timestamp)}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-medium">
                    {submission.service || 'N/A'}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Mail size={14} className="text-gray-500" />
                    <div>
                      <p className="text-xs text-gray-500">Email</p>
                      <p className="text-gray-300 text-sm font-medium">{submission.email}</p>
                    </div>
                  </div>
                  {submission.phone && (
                    <div className="flex items-center gap-2">
                      <Phone size={14} className="text-gray-500" />
                      <div>
                        <p className="text-xs text-gray-500">Phone</p>
                        <p className="text-gray-300 text-sm font-medium">{submission.phone}</p>
                      </div>
                    </div>
                  )}
                  {submission.company && (
                    <div className="flex items-center gap-2">
                      <Building2 size={14} className="text-gray-500" />
                      <div>
                        <p className="text-xs text-gray-500">Company</p>
                        <p className="text-gray-300 text-sm font-medium">{submission.company}</p>
                      </div>
                    </div>
                  )}
                </div>

                {submission.message && (
                  <div className="flex gap-2">
                    <MessageSquare size={14} className="text-gray-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Message</p>
                      <p className="text-gray-400 text-sm bg-white/[0.02] border border-white/[0.04] p-4 rounded-xl">{submission.message}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Submissions;
