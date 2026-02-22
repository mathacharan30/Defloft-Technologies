import { db } from '../firebase/config';
import { collection, addDoc, getDocs, deleteDoc, doc, serverTimestamp, query, orderBy } from 'firebase/firestore';

// Collection name in Firestore
const COLLECTION_NAME = 'contact_submissions';

// Add a new submission to Firebase
export const addSubmission = async (submission) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...submission,
      timestamp: serverTimestamp(),
      createdAt: new Date().toISOString()
    });
    
    return {
      id: docRef.id,
      ...submission,
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    console.error('Error adding submission to Firebase:', error);
    // Fallback to localStorage if Firebase fails
    return addSubmissionToLocalStorage(submission);
  }
};

// Get all submissions from Firebase
export const getSubmissions = async () => {
  try {
    const q = query(collection(db, COLLECTION_NAME), orderBy('timestamp', 'desc'));
    const querySnapshot = await getDocs(q);
    const submissions = [];
    
    querySnapshot.forEach((doc) => {
      submissions.push({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().createdAt || doc.data().timestamp?.toDate?.()?.toISOString() || new Date().toISOString()
      });
    });
    
    return submissions;
  } catch (error) {
    console.error('Error getting submissions from Firebase:', error);
    // Fallback to localStorage if Firebase fails
    return getSubmissionsFromLocalStorage();
  }
};

// Clear all submissions from Firebase
export const clearSubmissions = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
    const deletePromises = [];
    
    querySnapshot.forEach((document) => {
      deletePromises.push(deleteDoc(doc(db, COLLECTION_NAME, document.id)));
    });
    
    await Promise.all(deletePromises);
    console.log('All submissions cleared from Firebase');
  } catch (error) {
    console.error('Error clearing submissions from Firebase:', error);
    throw error;
  }
};

// Export submissions to JSON file
export const exportSubmissions = async () => {
  try {
    const submissions = await getSubmissions();
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
  } catch (error) {
    console.error('Error exporting submissions:', error);
  }
};

// Fallback functions for localStorage
const addSubmissionToLocalStorage = (submission) => {
  const submissionWithId = {
    id: Date.now(),
    timestamp: new Date().toISOString(),
    ...submission
  };
  
  try {
    const stored = localStorage.getItem('formSubmissions');
    const submissions = stored ? JSON.parse(stored) : [];
    submissions.push(submissionWithId);
    localStorage.setItem('formSubmissions', JSON.stringify(submissions));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
  
  return submissionWithId;
};

const getSubmissionsFromLocalStorage = () => {
  try {
    const stored = localStorage.getItem('formSubmissions');
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error loading from localStorage:', error);
    return [];
  }
};
