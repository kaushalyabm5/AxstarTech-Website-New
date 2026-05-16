import { useState, useEffect, useCallback } from 'react';
import { Plus, Pencil, Trash2, ExternalLink, Loader } from 'lucide-react';
import { supabase } from '../../../lib/supabase';
import PortfolioForm from './PortfolioForm';

const PortfolioManagement = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formOpen, setFormOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  const fetchItems = useCallback(async () => {
    setLoading(true);
    const { data } = await supabase
      .from('portfolio_items')
      .select('*')
      .order('created_at', { ascending: false });
    setItems(data ?? []);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const handleDelete = async (item) => {
    if (!window.confirm(`Delete "${item.title}"? This cannot be undone.`)) return;
    setDeletingId(item.id);

    if (item.image_urls?.length) {
      const paths = item.image_urls
        .map((url) => {
          const marker = '/storage/v1/object/public/portfolio-images/';
          const idx = url.indexOf(marker);
          return idx !== -1 ? url.slice(idx + marker.length) : null;
        })
        .filter(Boolean);
      if (paths.length) {
        await supabase.storage.from('portfolio-images').remove(paths);
      }
    }

    await supabase.from('portfolio_items').delete().eq('id', item.id);
    setDeletingId(null);
    fetchItems();
  };

  const handleFormClose = (refreshed) => {
    setFormOpen(false);
    setEditItem(null);
    if (refreshed) fetchItems();
  };

  const openAdd = () => {
    setEditItem(null);
    setFormOpen(true);
  };

  const openEdit = (item) => {
    setEditItem(item);
    setFormOpen(true);
  };

  return (
    <div className="p-6 md:p-8 w-full">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-xl font-light text-white tracking-tight">Portfolio</h2>
          <p className="text-neutral-700 text-[10px] mt-1 uppercase tracking-widest">
            {items.length} {items.length === 1 ? 'project' : 'projects'}
          </p>
        </div>
        <button
          onClick={openAdd}
          className="flex items-center gap-2 bg-gradient-to-r from-[#5dc192] via-[#02b96d] to-[#186d60] text-black text-xs font-semibold px-4 py-2.5 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
        >
          <Plus size={13} />
          Add Project
        </button>
      </div>

      {loading ? (
        <div className="space-y-3">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="h-[72px] bg-[#111111] border border-neutral-900 rounded-2xl animate-pulse"
            />
          ))}
        </div>
      ) : items.length === 0 ? (
        <div className="bg-[#111111] border border-neutral-800 rounded-2xl py-20 text-center">
          <p className="text-neutral-700 text-[10px] uppercase tracking-widest mb-4">
            No portfolio items yet
          </p>
          <button
            onClick={openAdd}
            className="text-[#5dc192] text-xs underline underline-offset-4 cursor-pointer hover:text-[#02b96d] transition-colors"
          >
            Add your first project
          </button>
        </div>
      ) : (
        <div className="space-y-2">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-[#111111] border border-neutral-900 rounded-2xl p-4 hover:border-neutral-800 transition-colors"
            >
              {item.thumbnail_url ? (
                <img
                  src={item.thumbnail_url}
                  alt={item.title}
                  className="w-16 h-11 object-cover rounded-lg flex-shrink-0 border border-neutral-900"
                />
              ) : (
                <div className="w-16 h-11 bg-neutral-900 rounded-lg flex-shrink-0 border border-neutral-800" />
              )}

              <div className="flex-1 min-w-0">
                <p className="text-neutral-200 text-sm font-medium truncate">
                  {item.title}
                </p>
                <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                  <span className="text-[10px] text-neutral-600 uppercase tracking-wider">
                    {item.category}
                  </span>
                  {item.industry && (
                    <>
                      <span className="text-neutral-800">·</span>
                      <span className="text-[10px] text-neutral-700">{item.industry}</span>
                    </>
                  )}
                  <span className="text-neutral-800">·</span>
                  <span
                    className={`text-[10px] ${
                      item.status === 'Active' ? 'text-[#5dc192]' : 'text-neutral-600'
                    }`}
                  >
                    {item.status}
                  </span>
                  {item.is_latest_project && (
                    <>
                      <span className="text-neutral-800">·</span>
                      <span className="text-[9px] text-[#5dc192] border border-[#5dc192]/30 bg-[#5dc192]/5 px-1.5 py-0.5 rounded-md uppercase tracking-wider">
                        Latest
                      </span>
                    </>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-1 flex-shrink-0">
                {item.website_link && (
                  <a
                    href={item.website_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-neutral-700 hover:text-neutral-300 transition-colors rounded-xl hover:bg-neutral-800"
                    title="Open website"
                  >
                    <ExternalLink size={13} />
                  </a>
                )}
                <button
                  onClick={() => openEdit(item)}
                  className="p-2 text-neutral-700 hover:text-[#5dc192] transition-colors rounded-xl hover:bg-neutral-800 cursor-pointer"
                  title="Edit"
                >
                  <Pencil size={13} />
                </button>
                <button
                  onClick={() => handleDelete(item)}
                  disabled={deletingId === item.id}
                  className="p-2 text-neutral-700 hover:text-red-400 transition-colors rounded-xl hover:bg-red-500/5 cursor-pointer disabled:opacity-40"
                  title="Delete"
                >
                  {deletingId === item.id ? (
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

      {formOpen && <PortfolioForm item={editItem} onClose={handleFormClose} />}
    </div>
  );
};

export default PortfolioManagement;
