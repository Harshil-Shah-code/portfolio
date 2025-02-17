'use client'
import React from 'react';
import { motion } from 'framer-motion';
import '@/styles/Resume.css'

const ResumePage = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Update with actual resume file path
    link.download = 'Harshil_Shah_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <motion.div 
        className="w-full max-w-3xl bg-gray-200 shadow-lg rounded-lg p-8 border border-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-center mb-6 text-black">Harshil Shah</h1>
        <p className="text-center text-gray-600">Software Engineer | Frontend Developer</p>

        <hr className="my-6 border-gray-300" />

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-black">Experience</h2>
          <p className="mt-2 text-gray-700">Software Engineer at XYZ Corp (2020 - Present)</p>
          <p className="mt-1 text-gray-600">- Developed modern web applications using React.js and Node.js.</p>
          <p className="mt-1 text-gray-600">- Collaborated with teams to improve UI/UX.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-black">Education</h2>
          <p className="mt-2 text-gray-700">B.Sc. in Computer Science - ABC University (2016 - 2020)</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-black">Skills</h2>
          <p className="mt-2 text-gray-700">JavaScript, React.js, Node.js, CSS, Tailwind CSS</p>
        </div>

<div className='flex justify-center mt-3'>
<div className="button" onClick={handleDownload}>
<div className="button-wrapper">
  <div className="text">Download</div>
    <span className="icon">
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round"  strokeWidth="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path></svg>
    </span>
  </div>
</div>
</div>
      </motion.div>
    </div>
  );
};

export default ResumePage;