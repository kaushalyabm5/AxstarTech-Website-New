import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    if (!loading) return;
    const t = setTimeout(() => setTimedOut(true), 6000);
    return () => clearTimeout(t);
  }, [loading]);

  if (loading && timedOut) {
    return (
      <div className="min-h-screen bg-[#000000] flex flex-col items-center justify-center gap-4 p-6">
        <p className="text-neutral-500 text-xs uppercase tracking-widest">
          Cannot connect to Supabase
        </p>
        <p className="text-neutral-700 text-[10px] text-center max-w-xs">
          Check that <span className="text-neutral-500">VITE_SUPABASE_URL</span> and{' '}
          <span className="text-neutral-500">VITE_SUPABASE_ANON_KEY</span> are set in{' '}
          <span className="text-neutral-500">.env.local</span>, then restart the dev server.
        </p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#000000] flex items-center justify-center">
        <div className="w-7 h-7 border-2 border-[#5dc192] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) return <Navigate to="/admin/login" replace />;

  return children;
};

export default ProtectedRoute;
