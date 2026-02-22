import { useState, useEffect } from 'react';
import { getSubmissions, clearSubmissions, exportSubmissions } from '../data/submissions';

function Submissions() {
  const [submissions, setSubmissions] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    loadSubmissions();
  }, []);

  const loadSubmissions = () => {
    const data = getSubmissions();
    setSubmissions(data);
  };

  const handleClear = () => {
    clearSubmissions();
    setSubmissions([]);
    setShowConfirm(false);
  };

  const handleExport = () => {
    exportSubmissions();
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#0a1f44] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Form Submissions</h1>
          <p className="text-gray-300">View and manage contact form submissions</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Action Buttons */}
        <div className="mb-6 flex gap-4">
          <button
            onClick={loadSubmissions}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Refresh
          </button>
          
          {submissions.length > 0 && (
            <>
              <button
                onClick={handleExport}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Export JSON
              </button>
              
              <button
                onClick={() => setShowConfirm(true)}
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Clear All
              </button>
            </>
          )}
        </div>

        {/* Confirmation Modal */}
        {showConfirm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md mx-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Clear All Submissions?</h3>
              <p className="text-gray-600 mb-6">This action cannot be undone. All form submissions will be permanently deleted.</p>
              <div className="flex gap-4">
                <button
                  onClick={handleClear}
                  className="flex-1 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
                >
                  Yes, Clear All
                </button>
                <button
                  onClick={() => setShowConfirm(false)}
                  className="flex-1 bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Submissions Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Total Submissions: <span className="font-bold text-[#0a1f44]">{submissions.length}</span>
          </p>
        </div>

        {/* Submissions List */}
        {submissions.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-200">
            <svg className="w-24 h-24 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No submissions yet</h3>
            <p className="text-gray-500">Form submissions will appear here</p>
          </div>
        ) : (
          <div className="space-y-6">
            {submissions.map((submission) => (
              <div key={submission.id} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#0a1f44]">{submission.fullName}</h3>
                    <p className="text-sm text-gray-500">{formatDate(submission.timestamp)}</p>
                  </div>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {submission.service || 'N/A'}
                  </span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <p className="text-gray-800 font-medium">{submission.email}</p>
                  </div>
                  {submission.phone && (
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Phone</p>
                      <p className="text-gray-800 font-medium">{submission.phone}</p>
                    </div>
                  )}
                  {submission.company && (
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Company</p>
                      <p className="text-gray-800 font-medium">{submission.company}</p>
                    </div>
                  )}
                </div>
                
                {submission.message && (
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Message</p>
                    <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">{submission.message}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Submissions;
