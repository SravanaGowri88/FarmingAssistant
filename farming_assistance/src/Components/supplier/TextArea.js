import React, { useState } from 'react';
import './TextArea.css';

function TextArea(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="text-area-container">
      <label
        htmlFor="text-area"
        className={`text-area-label ${isHovered ? 'shrink' : ''}`}
      >
        {props.label}
      </label>
      
      <textarea
        id="text-area"
        className="text-area"
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      />
    </div>
    
  );
}

function ParentComponent() {
    return (
      <div>
        <div>
          <TextArea label="Crop Name" />
        </div>
        <div>
          <TextArea label="Quantity" />
        </div>
        <div>
          <TextArea label="Mobile" />
        </div>
      </div>
    );
  }
  

export default ParentComponent;

