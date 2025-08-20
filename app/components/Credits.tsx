import React from 'react';

const Credits: React.FC = () => {
  return (
    <div className="credits-container">
      <p className="credits-text">
        Developed by{' '}
        <a
          href="https://www.linkedin.com/in/snehith-reddy-pannala-81b648295/"
          target="_blank"
          rel="noopener noreferrer"
          className="credits-link"
        >
          Snehith Reddy Pannala
        </a>
      </p>
    </div>
  );
};

export default Credits;
