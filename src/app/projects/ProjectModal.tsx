import React from 'react';
import { motion } from 'framer-motion';

const ProjectModal = ({ project, onClose }) => {
  console.log("222",project);
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <motion.div
        className="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
      >
        <h2 className="text-2xl font-bold text-black">{project.title}</h2>
        <p className="text-black">{project.duration}</p>
        <p className="mt-2 text-black">{project.description}</p>

        {/* Animated Witty Line */}
        <motion.p
          className="mt-4 text-lg font-semibold text-[#ffae09]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {project.witty_line} 🚀
        </motion.p>

        {/* Tech Stack as Badges */}
        <h3 className="mt-4 font-semibold text-black">Tech Stack:</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {JSON.parse(project.tech_stack).map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-200 text-black rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <button
          className="mt-6 px-4 py-2 bg-[#ffae09] text-white rounded hover:bg-[#e39800]"
          onClick={onClose}
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default ProjectModal;
