// src/components/Folder.js
import React, { useState } from 'react';

const Folder = ({ name, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <span onClick={toggleOpen}>
        {isOpen ? '📂' : '📁'} {name}
      </span>
      {isOpen && (
        <div style={{ paddingLeft: 20 }}>
          {children.map((child, index) => (
            child.type === 'file' ? (
              <div key={index}>📄 {child.name}</div>
            ) : (
              <Folder key={index} name={child.name} children={child.children} />
            )
          ))}
        </div>
      )}
    </div>
  );
};

export default Folder;
