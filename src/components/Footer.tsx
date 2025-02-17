import React from 'react';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '15px', background: 'inherit' }} className='flex justify-between'>
      <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      <p>
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer"> GitHub</a>
      </p>
    </footer>
  );
};

export default Footer;
