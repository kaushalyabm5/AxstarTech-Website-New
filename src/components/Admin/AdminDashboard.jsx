import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Users, ArrowRight, Clock, Eye, EyeOff } from 'lucide-react';
import { supabase } from '../../lib/supabase';

const StatCard = ({ label, value, icon: Icon, to, loading, iconColor = '#5dc192' }) => (
  <Link
    to={to}
    className="group bg-[#111111] border border-neutral-800 rounded-2xl p-6 hover:border-neutral-700 transition-all duration-300 block"
  >
    <div className="flex items-center justify-between mb-5">
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: `${iconColor}1a`, border: `1px solid ${iconColor}26` }}
      >
        <Icon size={15} style={{ color: iconColor }} />
      </div>
      <ArrowRight size={14} className="text-neutral-700 group-hover:text-neutral-400 group-hover:translate-x-0.5 transition-all duration-200" />
    </div>
    {loading ? (
      <div className="h-9 w-14 bg-neutral-800 rounded-lg animate-pulse mb-1" />
    ) : (
      <p className="text-3xl font-light text-white mb-1">{value}</p>
    )}
    <p className="text-neutral-600 text-[10px] uppercase tracking-widest">{label}</p>
  </Link>
);

const AdminDashboard = () => {
  const [stats, setStats] = useState({ portfolio: 0, publicPortfolio: 0, privatePortfolio: 0, careers: 0 });
  const [recentApplications, setRecentApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      const [
        { count: portfolioCount },
        { count: publicCount },
        { count: privateCount },
        { count: careersCount },
        { data: recent },
      ] = await Promise.all([
        supabase.from('portfolio_items').select('*', { count: 'exact', head: true }),
        supabase.from('portfolio_items').select('*', { count: 'exact', head: true }).eq('visibility', 'public'),
        supabase.from('portfolio_items').select('*', { count: 'exact', head: true }).eq('visibility', 'private'),
        supabase.from('career_applications').select('*', { count: 'exact', head: true }),
        supabase
          .from('career_applications')
          .select('id, first_name, last_name, position, created_at')
          .order('created_at', { ascending: false })
          .limit(5),
      ]);

      setStats({
        portfolio: portfolioCount ?? 0,
        publicPortfolio: publicCount ?? 0,
        privatePortfolio: privateCount ?? 0,
        careers: careersCount ?? 0,
      });
      setRecentApplications(recent ?? []);
      setLoading(false);
    };

    fetchStats();
  }, []);

  return (
    <div className="p-6 md:p-8 w-full">
      <div className="mb-8">
        <h2 className="text-xl font-light text-white tracking-tight">Overview</h2>
        <p className="text-neutral-700 text-[10px] mt-1 uppercase tracking-widest">
          Admin Dashboard
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        <StatCard
          label="Portfolio Items"
          value={stats.portfolio}
          icon={Briefcase}
          to="/admin/portfolio"
          loading={loading}
        />
        <StatCard
          label="Career Applications"
          value={stats.careers}
          icon={Users}
          to="/admin/careers"
          loading={loading}
        />
        <StatCard
          label="Public Portfolio"
          value={stats.publicPortfolio}
          icon={Eye}
          to="/admin/portfolio?visibility=public"
          loading={loading}
          iconColor="#34d399"
        />
        <StatCard
          label="Private Portfolio"
          value={stats.privatePortfolio}
          icon={EyeOff}
          to="/admin/portfolio?visibility=private"
          loading={loading}
          iconColor="#f87171"
        />
      </div>

      <div className="bg-[#111111] border border-neutral-800 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-neutral-900 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock size={13} className="text-[#5dc192]" />
            <h3 className="text-xs text-neutral-400 uppercase tracking-widest">
              Recent Applications
            </h3>
          </div>
          <Link
            to="/admin/careers"
            className="text-[10px] text-neutral-600 hover:text-[#5dc192] transition-colors uppercase tracking-widest"
          >
            View all
          </Link>
        </div>

        {loading ? (
          <div className="p-5 space-y-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-10 bg-neutral-800/40 rounded-xl animate-pulse" />
            ))}
          </div>
        ) : recentApplications.length === 0 ? (
          <div className="py-14 text-center">
            <p className="text-neutral-700 text-[10px] uppercase tracking-widest">
              No applications yet
            </p>
          </div>
        ) : (
          <div className="divide-y divide-neutral-900">
            {recentApplications.map((app) => (
              <div key={app.id} className="px-6 py-4 flex items-center justify-between">
                <div>
                  <p className="text-neutral-200 text-sm">
                    {app.first_name} {app.last_name}
                  </p>
                  <p className="text-neutral-600 text-[10px] mt-0.5 uppercase tracking-wider">
                    {app.position}
                  </p>
                </div>
                <p className="text-neutral-700 text-[10px]">
                  {new Date(app.created_at).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'short',
                  })}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
