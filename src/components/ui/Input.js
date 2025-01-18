import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const Input = ({ 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  className = '', 
  error,
  icon: Icon,
  ...props 
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const baseStyles = 'w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2';
  const errorStyles = 'border-red-500 focus:ring-red-200';
  const normalStyles = 'border-gray-300 focus:border-blue-500 focus:ring-blue-200';

  const renderPasswordToggle = () => {
    if (type !== 'password') return null;
    
    const ToggleIcon = showPassword ? EyeOff : Eye;
    return (
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
      >
        <ToggleIcon size={20} />
      </button>
    );
  };

  return (
    <div className="relative">
      {Icon && (
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <Icon size={20} />
        </div>
      )}
      
      <input
        type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`
          ${baseStyles} 
          ${Icon ? 'pl-10' : ''} 
          ${error ? errorStyles : normalStyles} 
          ${className}
        `}
        {...props}
      />
      
      {renderPasswordToggle()}
      
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
};

export default Input;