// Store form submissions in memory
let submissions = [];

export const addSubmission = (submission) => {
  const submissionWithId = {
    id: Date.now(),
    timestamp: new Date().toISOString(),
    ...submission
  };
  submissions.push(submissionWithId);
  
  // Also store in localStorage for persistence
  try {
    localStorage.setItem('formSubmissions', JSON.stringify(submissions));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
  
  return submissionWithId;
};

export const getSubmissions = () => {
  // Load from localStorage if available
  try {
    const stored = localStorage.getItem('formSubmissions');
    if (stored) {
      submissions = JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error loading from localStorage:', error);
  }
  return submissions;
};

export const clearSubmissions = () => {
  submissions = [];
  localStorage.removeItem('formSubmissions');
};

export const exportSubmissions = () => {
  const dataStr = JSON.stringify(submissions, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `contact-submissions-${Date.now()}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
