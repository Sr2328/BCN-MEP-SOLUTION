'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar } from 'lucide-react';
import { supabase, type Project } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      const { data } = await supabase
        .from('projects')
        .select('*')
        .order('order_index');

      if (data) {
        setProjects(data);
        const uniqueCategories = Array.from(
          new Set(data.map((p) => p.category))
        );
        setCategories(['All', ...uniqueCategories]);
      }
      setLoading(false);
    }

    fetchProjects();
  }, []);

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div>
    <section className="relative bg-gradient-to-br from-gray-100 via-white to-blue-50 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-14">
    <div className="grid md:grid-cols-12 items-center gap-8">
      
      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="md:col-span-6 space-y-4"
      >
        <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
          Award-Winning MEP Excellence
        </p>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          Where Innovation Drives{' '}
          <span className="text-orange-600">Structural Perfection</span>
        </h1>

        <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
          Delivering end-to-end MEP solutions with precision, performance, and sustainability across industrial, commercial, and residential projects.
        </p>

        {/* SERVICES */}
        <div className="flex flex-wrap gap-2 text-[13px] font-medium text-gray-700 pt-2">
          <span className="bg-gray-100 hover:bg-blue-100 px-3 py-1.5 rounded-full transition">Electrical Systems</span>
          <span className="bg-gray-100 hover:bg-blue-100 px-3 py-1.5 rounded-full transition">HVAC & Firefighting</span>
          <span className="bg-gray-100 hover:bg-blue-100 px-3 py-1.5 rounded-full transition">Plumbing & Utility</span>
          <span className="bg-gray-100 hover:bg-blue-100 px-3 py-1.5 rounded-full transition">Design & Supervision</span>
          <span className="bg-gray-100 hover:bg-blue-100 px-3 py-1.5 rounded-full transition">Maintenance</span>
        </div>
      </motion.div>

      {/* RIGHT IMAGE + STATS */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="md:col-span-6 flex flex-col md:flex-row items-center md:items-stretch gap-4 relative"
      >
        {/* IMAGE */}
        <div className="flex-1 rounded-lg overflow-hidden shadow-md">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=700&auto=format&fit=crop"
            alt="MEP Project Team"
            className="w-full h-64 md:h-72 object-cover"
          />
        </div>

        {/* STATS */}
        <div className="bg-gradient-to-b from-orange-500 to-orange-600 text-white rounded-xl px-5 py-6 w-40 flex flex-col justify-center shadow-lg">
          <div className="text-center mb-4">
            <div className="text-2xl font-bold">640+</div>
            <p className="text-sm text-orange-100 mt-1">Projects Completed</p>
          </div>
          <div className="text-center mb-4">
            <div className="text-2xl font-bold">25+</div>
            <p className="text-sm text-orange-100 mt-1">Years of Experience</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">450+</div>
            <p className="text-sm text-orange-100 mt-1">Happy Clients</p>
          </div>
        </div>

        {/* BLUE CIRCLE DECORATION */}
        <div className="absolute -top-8 -right-8 w-28 h-28 bg-blue-900 rounded-full opacity-80 -z-10"></div>
        <div className="absolute -top-5 -right-5 w-16 h-16 border-4 border-orange-400 rounded-full"></div>
      </motion.div>
    </div>
  </div>

  {/* ORANGE STAR ICON DECORATION */}
  <div className="absolute bottom-8 left-8 text-orange-500 text-2xl">✦</div>
</section>


      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-3 justify-center mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-64 bg-gray-200 rounded-lg mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg h-64 mb-4">
                    <img
                      src={project.image_url}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button size="sm" variant="secondary">
                        View Details
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge>{project.category}</Badge>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    {project.client_name && (
                      <p className="text-sm text-gray-500 mb-2">
                        Client: {project.client_name}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech: string) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {!loading && filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge>{selectedProject.category}</Badge>
                  {selectedProject.completion_date && (
                    <span className="text-sm text-gray-500 flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(
                        selectedProject.completion_date
                      ).toLocaleDateString('en-IN', {
                        month: 'long',
                        year: 'numeric',
                      })}
                    </span>
                  )}
                </div>
                <DialogTitle className="text-2xl">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                <img
                  src={selectedProject.image_url}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg"
                />

                {selectedProject.gallery_images.length > 0 && (
                  <div className="grid grid-cols-3 gap-4">
                    {selectedProject.gallery_images.map(
                      (img: string, i: number) => (
                        <img
                          key={i}
                          src={img}
                          alt={`Gallery ${i + 1}`}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                      )
                    )}
                  </div>
                )}

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Project Description
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {selectedProject.client_name && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Client
                    </h3>
                    <p className="text-gray-700">{selectedProject.client_name}</p>
                  </div>
                )}

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech: string) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
