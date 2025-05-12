import { Link } from 'react-router-dom';
import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  to: string;
  color?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  to, 
  color = 'primary', 
  size = 'medium', 
  className = '',
  onClick 
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300';
  
  const colorClasses = {
    primary: 'bg-[#00C896] text-white hover:bg-[#00866A]',
    secondary: 'bg-white text-[#0E1A2D] border border-gray-300 hover:border-[#00C896] hover:text-[#00C896]',
    outline: 'bg-transparent text-[#00C896] border border-[#00C896] hover:bg-[#00C896] hover:text-white'
  };
  
  const sizeClasses = {
    small: 'text-sm px-4 py-2',
    medium: 'px-6 py-3',
    large: 'text-lg px-8 py-4'
  };
  
  const classes = `${baseClasses} ${colorClasses[color]} ${sizeClasses[size]} ${className}`;
  
  if (to.startsWith('http') || to === '#') {
    return (
      <a href={to} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }
  
  return (
    <Link to={to} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
};

export default Button;