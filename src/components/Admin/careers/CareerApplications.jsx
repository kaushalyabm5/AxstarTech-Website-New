import { useState, useEffect, useCallback } from 'react';
import { Eye, Trash2, Download, Loader, X } from 'lucide-react';
import { supabase } from '../../../lib/supabase';

const DetailRow = ({ label, value, accent }) => (
  <div>
    <p className="text-[10px] uppercase tracking-widest text-neutral-600 mb-1">{label}</p>
    <p className={`text-sm leading-relaxed ${accent ? 'text-[#5dc192]' : 'text-neutral-300'}`}>
      {value || <span className="text-neutral-700 italic">Not provided</span>}
    </p>
  </div>
);

const CareerApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  const fetchApplications = useCallback(async () => {
    setLoading(true);
    const { data } = await supabase
      .from('career_applications')
      .select('*')
      .order('created_at', { ascending: false });
    setApplications(data ?? []);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchApplications();
  }, [fetchApplications]);

  const handleDelete = async (app) => {
    if (!window.confirm(`Delete application from ${app.first_name} ${app.last_name}?`)) return;
    setDeletingId(app.id);

    if (app.cv_url) {
      const marker = '/storage/v1/object/public/career-cvs/';
      const idx = app.cv_url.indexOf(marker);
      if (idx !== -1) {
        const path = app.cv_url.slice(idx + marker.length);
        await supabase.storage.from('career-cvs').remove([path]);
      }
    }

    await supabase.from('career_applications').delete().eq('id', app.id);
    setDeletingId(null);
    if (selected?.id === app.id) setSelected(null);
    fetchApplications();
  };

  return (
    <div className="p-6 md:p-8 w-full">
      <div className="mb-8">
        <h2 className="text-xl font-light text-white tracking-tight">Career Applications</h2>
        <p className="text-neutral-700 text-[10px] mt-1 uppercase tracking-widest">
          {loading ? '—' : applications.length}{' '}
          {applications.length === 1 ? 'application' : 'applications'} total
        </p>
      </div>

      {loading ? (
        <div className="space-y-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="h-16 bg-[#111111] border border-neutral-900 rounded-2xl animate-pulse"
            />
          ))}
        </div>
      ) : applications.length === 0 ? (
        <div className="bg-[#111111] border border-neutral-800 rounded-2xl py-20 text-center">
          <p className="text-neutral-700 text-[10px] uppercase tracking-widest">
            No applications yet
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          {applications.map((app) => (
            <div
              key={app.id}
              className="flex items-center gap-4 bg-[#111111] border border-neutral-900 rounded-2xl px-5 py-4 hover:border-neutral-800 transition-colors"
            >
              <div className="flex-1 min-w-0">
                <p className="text-neutral-200 text-sm font-medium">
                  {app.first_name} {app.last_name}
                </p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-[10px] text-[#5dc192] uppercase tracking-wider">
                    {app.position}
                  </span>
                  <span className="text-neutral-800">·</span>
                  <span className="text-neutral-700 text-[10px]">
                    {new Date(app.created_at).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1 flex-shrink-0">
                <button
                  onClick={() => setSelected(selected?.id === app.id ? null : app)}
                  className="p-2 text-neutral-700 hover:text-[#5dc192] transition-colors rounded-xl hover:bg-neutral-800 cursor-pointer"
                  title="View details"
                >
                  <Eye size={13} />
                </button>
                <button
                  onClick={() => handleDelete(app)}
                  disabled={deletingId === app.id}
                  className="p-2 text-neutral-700 hover:text-red-400 transition-colors rounded-xl hover:bg-red-500/5 cursor-pointer disabled:opacity-40"
                  title="Delete"
                >
                  {deletingId === app.id ? (
                    <Loader size={13} className="animate-spin" />
                  ) : (
                    <Trash2 size={13} />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Detail Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg bg-[#111111] border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-8 py-5 border-b border-neutral-900">
              <h3 className="text-white font-light">Application Details</h3>
              <button
                onClick={() => setSelected(null)}
                className="text-neutral-600 hover:text-white transition-colors cursor-pointer"
              >
                <X size={17} />
              </button>
            </div>

            <div className="px-8 py-6 space-y-5">
              <DetailRow
                label="Full Name"
                value={`${selected.first_name} ${selected.last_name}`}
              />
              <DetailRow label="Position Applied" value={selected.position} accent />
              <DetailRow
                label="Submitted"
                value={new Date(selected.created_at).toLocaleString('en-US', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              />

              {selected.cover_letter && (
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-neutral-600 mb-2">
                    Cover Letter
                  </p>
                  <p className="text-neutral-300 text-sm leading-relaxed bg-neutral-900/60 p-4 rounded-xl border border-neutral-800">
                    {selected.cover_letter}
                  </p>
                </div>
              )}

              {selected.cv_url && (
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-neutral-600 mb-2">
                    Resume / CV
                  </p>
                  <a
                    href={selected.cv_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#5dc192] text-sm hover:text-[#02b96d] transition-colors"
                  >
                    <Download size={14} />
                    Download CV
                  </a>
                </div>
              )}
            </div>

            <div className="px-8 pb-6 flex items-center justify-between">
              <button
                onClick={() => handleDelete(selected)}
                disabled={deletingId === selected.id}
                className="flex items-center gap-2 text-xs text-red-500 hover:text-red-400 border border-red-900/40 hover:border-red-700/50 px-4 py-2 rounded-xl transition-colors cursor-pointer disabled:opacity-50"
              >
                {deletingId === selected.id && <Loader size={12} className="animate-spin" />}
                Delete Application
              </button>
              <button
                onClick={() => setSelected(null)}
                className="text-xs text-neutral-600 hover:text-neutral-300 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerApplications;
