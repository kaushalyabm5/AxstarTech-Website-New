import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";

const categories = [
  "All",
  "Web Development",
  "Mobile App Development",
  "Social Media",
  "Ui Ux Design",
  "Ecommerse Website",
];

const mapProject = (item) => ({
  id: item.id,
  category: item.category,
  image: item.thumbnail_url,
  images: item.image_urls ?? [],
  title: item.title,
  description: item.description,
  requirements: item.requirements ?? [],
  clientCountry: item.client_country,
  industry: item.industry,
  duration: item.duration,
  projectType: item.project_type,
  techStack: item.tech_stack ?? [],
  status: item.status,
  projectSuccessRate: item.project_success_rate,
  deliveryTime: item.delivery_time,
  clientName: item.client_name,
  clientImg: item.client_img,
  websiteLink: item.website_link,
});

const ProjectShowcase = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data } = await supabase
        .from("portfolio_items")
        .select("*")
        .order("created_at", { ascending: false });
      setProjects((data ?? []).map(mapProject));
      setLoading(false);
    };
    fetchProjects();
  }, []);

  const handleDetails = (project) => {
    navigate("/project-details", { state: project });
  };

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio-showcase" className="w-full bg-black py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 text-[10px] rounded-[.5rem] uppercase tracking-[0.2em] font-medium transition-all duration-300 border cursor-pointer ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-black"
                  : "bg-transparent text-neutral-500 border-neutral-800 hover:border-[#02b96d] hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Loading Skeleton */}
        {loading && (
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="rounded-[1rem] bg-[#070707] border border-neutral-900 overflow-hidden"
              >
                <div className="aspect-video bg-neutral-900 animate-pulse" />
                <div className="px-8 py-5 space-y-3">
                  <div className="flex gap-2">
                    <div className="h-5 w-16 bg-neutral-800 rounded animate-pulse" />
                    <div className="h-5 w-12 bg-neutral-800 rounded animate-pulse" />
                  </div>
                  <div className="h-5 w-3/4 bg-neutral-800 rounded animate-pulse" />
                  <div className="h-3 w-full bg-neutral-800/60 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Project Grid */}
        {!loading && (
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => handleDetails(project)}
                className="group flex flex-col rounded-[1rem] bg-[#070707] border border-neutral-900 transition-all duration-500 cursor-pointer"
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-[1rem] p-2 bg-[#070707]">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full rounded-[1rem] object-cover group-hover:scale-100 transition-all duration-1000 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full rounded-[1rem] bg-neutral-900 flex items-center justify-center">
                      <span className="text-neutral-700 text-[10px] uppercase tracking-widest">
                        No Image
                      </span>
                    </div>
                  )}
                </div>

                <div className="px-8 py-5 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.industry && (
                      <span className="text-[10px] rounded-[.3rem] font-bold flex items-center uppercase tracking-widest text-neutral-900 bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] px-2 py-1">
                        {project.industry}
                      </span>
                    )}
                    {project.clientCountry && (
                      <span className="text-[10px] rounded-[.3rem] font-bold flex items-center uppercase tracking-widest text-neutral-900 bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] px-2 py-1">
                        {project.clientCountry}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-medium tracking-tight text-white mb-3 transition-colors group-hover:text-neutral-300">
                    {project.title}
                  </h3>

                  <p className="text-neutral-500 text-xs leading-relaxed mb-4 line-clamp-2 font-light">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredProjects.length === 0 && (
          <div className="text-center py-24 border border-neutral-900">
            <p className="text-neutral-700 uppercase tracking-widest text-[9px]">
              {projects.length === 0 ? 'No projects yet' : 'Empty Archive'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectShowcase;
