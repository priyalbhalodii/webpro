import React, { useState, useRef } from 'react';

// Reusable Accordion component
const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null); // Use ref to calculate content height

  // Toggle accordion state
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="  container mb-5 ">
        

      {/* Accordion Header */}
      <button
        className={`rounded-[15px] flex justify-between items-center w-full py-4 px-6 text-left text-[25px] font-medium focus:outline-none transition-colors duration-300 ${
            isOpen ? 'rounded-b-[0px] bg-[#Ed5959] text-white' : 'bg-[#f3f3f3] text-[#453b57] hover:bg-[#ed5959] hover:text-white '
        }`}
        onClick={toggleAccordion}
        >
        <span>{title}</span>
        <span className="text-[40px]">
          {isOpen ? '-' : '+'} {/* Plus and minus button */}
        </span>
      </button>

      {/* Accordion Content */}
      <div
        ref={contentRef}
        className={`rounded-b-[15px] overflow-hidden transition-all duration-500 ease-out transform`}
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0px',
          opacity: isOpen ? '1' : '0',
          transition: 'max-height 0.5s ease-out, opacity 0.5s ease-out',
        }}
      >
        <div className="p-6 bg-[#ed5959] text-white text-[10px]">{children}</div>
      </div>
          </div>
   
  );
};

export default Accordion;
