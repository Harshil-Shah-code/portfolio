'use client'
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const getProjects = async () => {
    try {
      const response = await fetch('/get-projects');
      const data = await response.json();
      setProjects(data.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  useEffect(()=>{
    getProjects();
  },[])

  return (
    <div className="flex flex-col items-center min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Projects</h1>
      
      <div className="w-full max-w-2xl space-y-4">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="p-4 bg-white shadow-md rounded-md cursor-pointer border border-gray-300 hover:shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedProject(project)}
          >
            <h2 className="text-xl font-semibold text-black">{project.title}</h2>
            <p className="text-gray-600">{project.duration}</p>
          </motion.div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
};

export default ProjectsPage;
