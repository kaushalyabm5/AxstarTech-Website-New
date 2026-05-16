import { useState } from 'react';
import { NavLink, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { LayoutDashboard, Briefcase, Users, LogOut, Menu, X } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import AdminDashboard from './AdminDashboard';
import PortfolioManagement from './portfolio/PortfolioManagement';
import CareerApplications from './careers/CareerApplications';

const navItems = [
  { to: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/admin/portfolio', label: 'Portfolio', icon: Briefcase },
  { to: '/admin/careers', label: 'Career Applications', icon: Users },
];

const SidebarContent = ({ user, onSignOut, onNavClick }) => (
  <div className="flex flex-col h-full bg-[#070707] border-r border-neutral-900">
    <div className="px-6 py-5 border-b border-neutral-900">
      <img
        src="/axstar_logo.png"
        alt="AXSTAR"
        className="h-8 w-auto object-contain"
      />
      <p className="text-neutral-700 text-[9px] uppercase tracking-[0.2em] mt-2">
        Admin Dashboard
      </p>
    </div>

    <nav className="flex-1 px-3 py-5 space-y-0.5">
      {navItems.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          onClick={onNavClick}
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-200 ${
              isActive
                ? 'bg-[#5dc192]/10 text-[#5dc192] border border-[#5dc192]/15'
                : 'text-neutral-500 hover:text-neutral-200 hover:bg-white/5'
            }`
          }
        >
          <Icon size={15} />
          <span className="text-xs tracking-wide">{label}</span>
        </NavLink>
      ))}
    </nav>

    <div className="px-3 py-5 border-t border-neutral-900">
      <p className="text-neutral-700 text-[10px] px-3 mb-2 truncate">{user?.email}</p>
      <button
        onClick={onSignOut}
        className="flex items-center gap-3 px-3 py-2.5 w-full rounded-xl text-xs text-neutral-600 hover:text-red-400 hover:bg-red-500/5 transition-all duration-200 cursor-pointer"
      >
        <LogOut size={15} />
        Sign Out
      </button>
    </div>
  </div>
);

const AdminLayout = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    navigate('/admin/login');
  };

  return (
    <>
    <Helmet>
      <meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
      <meta name="googlebot" content="noindex, nofollow" />
    </Helmet>
    <div className="flex h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex flex-col w-60 flex-shrink-0">
        <SidebarContent user={user} onSignOut={handleSignOut} />
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-64">
            <SidebarContent
              user={user}
              onSignOut={handleSignOut}
              onNavClick={() => setSidebarOpen(false)}
            />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Mobile Top Bar */}
        <div className="lg:hidden flex items-center justify-between px-5 py-3.5 border-b border-neutral-900 bg-[#070707]">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-neutral-500 hover:text-white transition-colors cursor-pointer"
          >
            <Menu size={18} />
          </button>
          <img
            src="/axstar_logo.png"
            alt="AXSTAR"
            className="h-6 w-auto object-contain"
          />
          <div className="w-5" />
        </div>

        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="portfolio" element={<PortfolioManagement />} />
            <Route path="careers" element={<CareerApplications />} />
          </Routes>
        </main>
      </div>
    </div>
    </>
  );
};

export default AdminLayout;
