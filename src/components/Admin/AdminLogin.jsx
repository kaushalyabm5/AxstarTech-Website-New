import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useAuth } from '../../context/AuthContext';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate('/admin/dashboard', { replace: true });
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const { error: signInError } = await signIn(email, password);
      if (signInError) {
        setError(signInError.message);
      } else {
        navigate('/admin/dashboard', { replace: true });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Helmet>
      <meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
      <meta name="googlebot" content="noindex, nofollow" />
    </Helmet>
    <div className="min-h-screen bg-[#000000] flex items-center justify-center p-6 selection:bg-emerald-500/30">
      <div className="w-full max-w-md">
        <div className="mb-10 text-center">
          <img
            src="/axstar_logo.png"
            alt="Axstar"
            className="h-12 w-auto mx-auto mb-3 object-contain"
          />
          <p className="text-neutral-600 text-[10px] uppercase tracking-[0.25em]">
            Admin Portal
          </p>
        </div>

        <div className="bg-[#111111] border border-neutral-800 rounded-3xl p-8 md:p-10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-7">
            <div className="group">
              <label className="block text-xs uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-[#5dc192] via-[#02b96d] to-[#186d60] mb-2">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@axstartech.com"
                className="w-full bg-transparent border-b border-neutral-800 py-2 text-neutral-200 focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-neutral-700 text-sm"
              />
            </div>

            <div className="group">
              <label className="block text-xs uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-[#5dc192] via-[#02b96d] to-[#186d60] mb-2">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-transparent border-b border-neutral-800 py-2 text-neutral-200 focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-neutral-700 text-sm"
              />
            </div>

            {error && (
              <p className="text-red-400 text-xs bg-red-500/10 border border-red-900/50 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#5dc192] via-[#02b96d] to-[#186d60] text-black font-semibold py-3.5 rounded-xl hover:scale-[1.01] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 cursor-pointer text-sm"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default AdminLogin;
