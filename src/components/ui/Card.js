import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  title, 
  subtitle 
}) => {
  return (
    <div className={`
      bg-white 
      shadow-md 
      rounded-lg 
      p-6 
      ${className}
    `}>
      {(title || subtitle) && (
        <div className="mb-4">
          {title && <h2 className="text-2xl font-bold text-gray-800">{title}</h2>}
          {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        </div>
      )}
      
      {children}
    </div>
  );
};

export default Card;