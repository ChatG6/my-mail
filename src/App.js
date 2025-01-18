import React, { Suspense, lazy } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Navigate 
} from 'react-router-dom';

// Import authentication service
import { isAuthenticated } from './services/authService';

// Lazy load pages for performance
const LoginPage = lazy(() => import('./pages/LoginPage'));
const InboxPage = lazy(() => import('./pages/InboxPage'));

// Loading Spinner Component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
  </div>
);

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const authenticated = isAuthenticated();
  
  return authenticated ? (
    children
  ) : (
    <Navigate to="/" replace />
  );
};

function App() {
  return (
    <Router>
      {/* Add dir attribute for language support */}
      <div dir="rtl" lang="ar" className="font-arabic">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {/* Login Route */}
            <Route 
              path="/" 
              element={<LoginPage />} 
            />
            
            {/* Protected Inbox Route */}
            <Route 
              path="/inbox" 
              element={
                <ProtectedRoute>
                  <InboxPage />
                </ProtectedRoute>
              } 
            />
            
            {/* Fallback Route */}
            <Route 
              path="*" 
              element={<Navigate to="/" replace />} 
            />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;