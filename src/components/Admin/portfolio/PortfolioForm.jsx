import { useState, useEffect, useRef } from 'react';
import { X, Upload, Loader, User } from 'lucide-react';
import { supabase } from '../../../lib/supabase';

const CATEGORIES = [
  'Web Development',
  'Mobile App Development',
  'UI UX Design',
  'Social Media',
  'Ecommerce Website',
];

const STATUSES = ['Completed', 'Active', 'In Progress'];

const Label = ({ children }) => (
  <label className="block text-[10px] uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-[#5dc192] via-[#02b96d] to-[#186d60] mb-2">
    {children}
  </label>
);

const TextInput = ({ name, value, onChange, placeholder, type = 'text' }) => (
  <input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="w-full bg-transparent border-b border-neutral-800 py-2 text-neutral-200 text-sm focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-neutral-700"
  />
);

const PortfolioForm = ({ item, onClose }) => {
  const isEditing = !!item;

  const [form, setForm] = useState({
    title: item?.title ?? '',
    description: item?.description ?? '',
    category: item?.category ?? '',
    industry: item?.industry ?? '',
    client_country: item?.client_country ?? '',
    duration: item?.duration ?? '',
    project_type: item?.project_type ?? '',
    tech_stack: item?.tech_stack?.join(', ') ?? '',
    requirements: item?.requirements?.join('\n') ?? '',
    status: item?.status ?? 'Completed',
    project_success_rate: item?.project_success_rate ?? '',
    delivery_time: item?.delivery_time ?? '',
    client_name: item?.client_name ?? '',
    website_link: item?.website_link ?? '',
    is_latest_project: item?.is_latest_project ?? false,
    latest_project_order: item?.latest_project_order?.toString() ?? '',
  });

  // ─── Project Images ───────────────────────────────────────────────
  const [existingImages, setExistingImages] = useState(item?.image_urls ?? []);
  const [newImageFiles, setNewImageFiles]   = useState([]);
  const [newImagePreviews, setNewImagePreviews] = useState([]);

  // featuredKey: 'existing:{url}' | 'new:{index}' | null
  const [featuredKey, setFeaturedKey] = useState(
    item?.thumbnail_url ? `existing:${item.thumbnail_url}` : null
  );

  // ─── Client Image ─────────────────────────────────────────────────
  const [clientImageFile, setClientImageFile]       = useState(null);
  const [clientImagePreview, setClientImagePreview] = useState(item?.client_img ?? null);
  const existingClientImg = item?.client_img ?? null;

  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState('');

  // Refs for cleanup of object URLs
  const newPreviewsRef    = useRef([]);
  const clientPreviewRef  = useRef(null);

  useEffect(() => {
    return () => {
      newPreviewsRef.current.forEach(URL.revokeObjectURL);
      if (clientPreviewRef.current) URL.revokeObjectURL(clientPreviewRef.current);
    };
  }, []);

  // ─── Handlers ─────────────────────────────────────────────────────

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNewImages = (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    const previews = files.map((f) => URL.createObjectURL(f));

    // Append to existing selections instead of replacing
    setNewImageFiles((prev) => [...prev, ...files]);
    setNewImagePreviews((prev) => {
      const updated = [...prev, ...previews];
      newPreviewsRef.current = updated;
      return updated;
    });

    // Reset so the same dialog can be opened again to add more
    e.target.value = '';
  };

  const removeExistingImage = (url) => {
    setExistingImages((prev) => prev.filter((u) => u !== url));
    setFeaturedKey((prev) => (prev === `existing:${url}` ? null : prev));
  };

  const removeNewImage = (index) => {
    URL.revokeObjectURL(newImagePreviews[index]);
    const updatedFiles    = newImageFiles.filter((_, i) => i !== index);
    const updatedPreviews = newImagePreviews.filter((_, i) => i !== index);
    newPreviewsRef.current = updatedPreviews;

    setNewImageFiles(updatedFiles);
    setNewImagePreviews(updatedPreviews);

    setFeaturedKey((prev) => {
      if (!prev?.startsWith('new:')) return prev;
      const featIdx = parseInt(prev.slice(4), 10);
      if (featIdx === index) return null;              // removed the featured one
      if (featIdx > index) return `new:${featIdx - 1}`; // shift index down
      return prev;
    });
  };

  const handleClientImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (clientPreviewRef.current) URL.revokeObjectURL(clientPreviewRef.current);
    const preview = URL.createObjectURL(file);
    clientPreviewRef.current = preview;
    setClientImageFile(file);
    setClientImagePreview(preview);
  };

  const isFeatured = (source, id) =>
    featuredKey === `${source}:${id}`;

  // ─── Upload helpers ───────────────────────────────────────────────

  const uploadProjectImages = async (projectId) => {
    const urls = [];
    for (let i = 0; i < newImageFiles.length; i++) {
      const file = newImageFiles[i];
      const ext  = file.name.split('.').pop();
      const path = `${projectId}/${Date.now()}-${i}.${ext}`;
      const { error: uploadError } = await supabase.storage
        .from('portfolio-images')
        .upload(path, file, { upsert: true });
      if (uploadError) throw uploadError;
      const { data: { publicUrl } } = supabase.storage
        .from('portfolio-images')
        .getPublicUrl(path);
      urls.push(publicUrl);
    }
    return urls;
  };

  const uploadClientImage = async (projectId) => {
    if (!clientImageFile) return existingClientImg;
    const ext  = clientImageFile.name.split('.').pop();
    const path = `clients/${projectId}/client.${ext}`;
    const { error: uploadError } = await supabase.storage
      .from('portfolio-images')
      .upload(path, clientImageFile, { upsert: true });
    if (uploadError) throw uploadError;
    const { data: { publicUrl } } = supabase.storage
      .from('portfolio-images')
      .getPublicUrl(path);
    return publicUrl;
  };

  // ─── Submit ───────────────────────────────────────────────────────

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const projectId = item?.id ?? crypto.randomUUID();

      const [newImageUrls, clientImgUrl] = await Promise.all([
        uploadProjectImages(projectId),
        uploadClientImage(projectId),
      ]);

      const allImageUrls = [...existingImages, ...newImageUrls];

      // Resolve featured → thumbnail_url
      let thumbnailUrl = allImageUrls[0] ?? null;
      if (featuredKey) {
        if (featuredKey.startsWith('existing:')) {
          thumbnailUrl = featuredKey.slice('existing:'.length);
        } else if (featuredKey.startsWith('new:')) {
          const idx = parseInt(featuredKey.slice(4), 10);
          thumbnailUrl = newImageUrls[idx] ?? allImageUrls[0] ?? null;
        }
      }

      const payload = {
        id: projectId,
        title: form.title,
        description: form.description,
        category: form.category,
        industry: form.industry,
        client_country: form.client_country,
        duration: form.duration,
        project_type: form.project_type,
        tech_stack: form.tech_stack.split(',').map((s) => s.trim()).filter(Boolean),
        requirements: form.requirements.split('\n').map((s) => s.trim()).filter(Boolean),
        status: form.status,
        project_success_rate: form.project_success_rate,
        delivery_time: form.delivery_time,
        client_name: form.client_name,
        client_img: clientImgUrl,
        website_link: form.website_link,
        is_latest_project: form.is_latest_project,
        latest_project_order: form.is_latest_project && form.latest_project_order !== ''
          ? parseInt(form.latest_project_order, 10)
          : null,
        thumbnail_url: thumbnailUrl,
        image_urls: allImageUrls,
      };

      const { error: dbError } = isEditing
        ? await supabase.from('portfolio_items').update(payload).eq('id', item.id)
        : await supabase.from('portfolio_items').insert(payload);

      if (dbError) throw dbError;
      onClose(true);
    } catch (err) {
      setError(err.message ?? 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // ─── Image tile shared classes ────────────────────────────────────
  const imgTileClass = (featured) =>
    `relative group/img cursor-pointer rounded-lg overflow-hidden flex-shrink-0 transition-all duration-200 ${
      featured
        ? 'ring-2 ring-[#5dc192] ring-offset-[2px] ring-offset-[#111111]'
        : 'opacity-80 hover:opacity-100'
    }`;

  // ─── Render ───────────────────────────────────────────────────────

  const hasAnyImage = existingImages.length > 0 || newImagePreviews.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/75 backdrop-blur-sm overflow-y-auto p-4 py-10">
      <div className="w-full max-w-2xl bg-[#111111] border border-neutral-800 rounded-3xl shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-neutral-900">
          <h3 className="text-white font-light">
            {isEditing ? 'Edit Project' : 'Add New Project'}
          </h3>
          <button
            onClick={() => onClose(false)}
            className="text-neutral-600 hover:text-white transition-colors cursor-pointer"
          >
            <X size={17} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">

          {/* Title */}
          <div>
            <Label>Title *</Label>
            <TextInput name="title" value={form.title} onChange={handleChange} placeholder="Project title" />
          </div>

          {/* Description */}
          <div>
            <Label>Description</Label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={3}
              placeholder="Describe the project..."
              className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl p-3 text-neutral-200 text-sm focus:outline-none focus:border-emerald-500 transition-colors resize-none placeholder:text-neutral-700"
            />
          </div>

          {/* Category & Status */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label>Category *</Label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                required
                className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2.5 text-neutral-200 text-sm focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer"
              >
                <option value="">Select category</option>
                {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <Label>Status</Label>
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2.5 text-neutral-200 text-sm focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer"
              >
                {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          </div>

          {/* Industry & Country */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label>Industry</Label>
              <TextInput name="industry" value={form.industry} onChange={handleChange} placeholder="e.g. Fitness, Tourism" />
            </div>
            <div>
              <Label>Client Country</Label>
              <TextInput name="client_country" value={form.client_country} onChange={handleChange} placeholder="e.g. USA, Sri Lanka" />
            </div>
          </div>

          {/* Duration & Project Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label>Duration</Label>
              <TextInput name="duration" value={form.duration} onChange={handleChange} placeholder="e.g. 2 Weeks" />
            </div>
            <div>
              <Label>Project Type</Label>
              <TextInput name="project_type" value={form.project_type} onChange={handleChange} placeholder="e.g. Web Development" />
            </div>
          </div>

          {/* Project Health & Deployment (renamed) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label>Project Health</Label>
              <TextInput name="project_success_rate" value={form.project_success_rate} onChange={handleChange} placeholder="e.g. 4.8" />
            </div>
            <div>
              <Label>Deployment</Label>
              <TextInput name="delivery_time" value={form.delivery_time} onChange={handleChange} placeholder="e.g. 100%" />
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <Label>Tech Stack (comma-separated)</Label>
            <TextInput name="tech_stack" value={form.tech_stack} onChange={handleChange} placeholder="React, Tailwind CSS, Firebase" />
          </div>

          {/* Requirements */}
          <div>
            <Label>Requirements (one per line)</Label>
            <textarea
              name="requirements"
              value={form.requirements}
              onChange={handleChange}
              rows={3}
              placeholder={'Fully Responsive\nSEO-friendly\nCross-browser compatibility'}
              className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl p-3 text-neutral-200 text-sm focus:outline-none focus:border-emerald-500 transition-colors resize-none placeholder:text-neutral-700"
            />
          </div>

          {/* Client Name + Client Photo Upload */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label>Client Name</Label>
              <TextInput name="client_name" value={form.client_name} onChange={handleChange} placeholder="Client name" />
            </div>

            <div>
              <Label>Client Photo</Label>
              <div className="flex items-center gap-3 mt-1">
                {/* Circle preview */}
                <div className="w-11 h-11 rounded-full overflow-hidden bg-neutral-900 border border-neutral-800 flex-shrink-0">
                  {clientImagePreview ? (
                    <img
                      src={clientImagePreview}
                      alt="Client"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <User size={15} className="text-neutral-700" />
                    </div>
                  )}
                </div>
                {/* Upload trigger */}
                <label className="flex-1 flex items-center gap-2 px-3 py-2 rounded-xl border border-dashed border-neutral-800 cursor-pointer hover:border-neutral-600 hover:bg-neutral-900/30 transition-all min-w-0">
                  <Upload size={12} className="text-neutral-600 flex-shrink-0" />
                  <span className="text-xs text-neutral-600 truncate">
                    {clientImageFile ? clientImageFile.name : 'Upload photo'}
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleClientImage}
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Website Link */}
          <div>
            <Label>Website Link</Label>
            <TextInput name="website_link" value={form.website_link} onChange={handleChange} placeholder="https://..." />
          </div>

          {/* ─── Latest Projects ─────────────────────────────────────── */}
          <div className="border border-neutral-800/70 rounded-2xl p-5 bg-neutral-900/20">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-[#5dc192] via-[#02b96d] to-[#186d60]">
                  Homepage — Latest Projects
                </p>
                <p className="text-[10px] text-neutral-600 mt-1">
                  Feature this project in the homepage carousel
                </p>
              </div>
              {/* Toggle */}
              <button
                type="button"
                onClick={() =>
                  setForm((prev) => ({ ...prev, is_latest_project: !prev.is_latest_project }))
                }
                className={`relative flex-shrink-0 w-10 h-[22px] rounded-full transition-colors duration-200 cursor-pointer ${
                  form.is_latest_project ? 'bg-[#5dc192]' : 'bg-neutral-800'
                }`}
              >
                <span
                  className={`absolute top-[3px] left-[3px] w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${
                    form.is_latest_project ? 'translate-x-[18px]' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {form.is_latest_project && (
              <div className="mt-4 pt-4 border-t border-neutral-800/60">
                <Label>Display Order</Label>
                <input
                  type="number"
                  name="latest_project_order"
                  value={form.latest_project_order}
                  onChange={handleChange}
                  min="1"
                  placeholder="1"
                  className="w-full bg-transparent border-b border-neutral-800 py-2 text-neutral-200 text-sm focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-neutral-700"
                />
                <p className="text-[10px] text-neutral-700 mt-1">
                  Lower number appears first in the carousel
                </p>
              </div>
            )}
          </div>

          {/* ─── Project Images ─────────────────────────────────────── */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <Label>Project Images</Label>
              {hasAnyImage && (
                <span className="text-[9px] text-neutral-700 uppercase tracking-wider">
                  Click an image to set as featured
                </span>
              )}
            </div>

            {/* Existing uploaded images */}
            {existingImages.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {existingImages.map((url) => {
                  const featured = isFeatured('existing', url);
                  return (
                    <div
                      key={url}
                      className={imgTileClass(featured)}
                      onClick={() => setFeaturedKey(`existing:${url}`)}
                      title="Click to set as featured"
                    >
                      <img
                        src={url}
                        alt=""
                        className="w-20 h-14 object-cover"
                      />
                      {featured && (
                        <div className="absolute inset-x-0 bottom-0 bg-[#5dc192] py-0.5 text-center">
                          <span className="text-[8px] text-black font-bold uppercase tracking-wider">
                            Featured
                          </span>
                        </div>
                      )}
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); removeExistingImage(url); }}
                        className="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity cursor-pointer"
                      >
                        <X size={8} />
                      </button>
                    </div>
                  );
                })}
              </div>
            )}

            {/* New image previews (before upload) */}
            {newImagePreviews.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {newImagePreviews.map((preview, i) => {
                  const featured = isFeatured('new', i);
                  return (
                    <div
                      key={i}
                      className={imgTileClass(featured)}
                      onClick={() => setFeaturedKey(`new:${i}`)}
                      title="Click to set as featured"
                    >
                      <img
                        src={preview}
                        alt=""
                        className="w-20 h-14 object-cover"
                      />
                      {featured ? (
                        <div className="absolute inset-x-0 bottom-0 bg-[#5dc192] py-0.5 text-center">
                          <span className="text-[8px] text-black font-bold uppercase tracking-wider">
                            Featured
                          </span>
                        </div>
                      ) : (
                        <span className="absolute top-1 left-1 text-[7px] bg-black/70 text-neutral-500 px-1 py-0.5 rounded leading-none">
                          New
                        </span>
                      )}
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); removeNewImage(i); }}
                        className="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity cursor-pointer"
                      >
                        <X size={8} />
                      </button>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Upload dropzone */}
            <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-neutral-800 rounded-2xl cursor-pointer hover:bg-neutral-900/40 hover:border-neutral-700 transition-all">
              <Upload size={15} className="text-neutral-700 mb-1.5" />
              <p className="text-sm text-neutral-500">
                {newImageFiles.length > 0
                  ? `${newImageFiles.length} new file${newImageFiles.length > 1 ? 's' : ''} selected`
                  : hasAnyImage
                    ? 'Add more images'
                    : 'Click to upload images'}
              </p>
              <p className="text-[10px] text-neutral-700 mt-0.5">PNG, JPG, WEBP</p>
              <input
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                onChange={handleNewImages}
              />
            </label>
          </div>

          {error && (
            <p className="text-red-400 text-xs bg-red-500/10 border border-red-900/50 rounded-lg px-3 py-2">
              {error}
            </p>
          )}

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={() => onClose(false)}
              disabled={loading}
              className="flex-1 py-3 rounded-xl border border-neutral-800 text-neutral-400 text-sm hover:text-white hover:border-neutral-700 transition-all cursor-pointer disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#5dc192] via-[#02b96d] to-[#186d60] text-black font-semibold py-3 rounded-xl hover:scale-[1.01] active:scale-[0.98] transition-all disabled:opacity-50 cursor-pointer text-sm"
            >
              {loading && <Loader size={14} className="animate-spin" />}
              {loading ? 'Saving...' : isEditing ? 'Update Project' : 'Add Project'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PortfolioForm;
