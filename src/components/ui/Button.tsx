import React from 'react';

// We define the props our button will accept. 
// Extending React.ButtonHTMLAttributes allows it to act like a normal HTML button (onClick, disabled, etc.)
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}: ButtonProps) {
  // Base classes that every button shares
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none";
  
  // Variant-specific classes
  const variants = {
    primary: "bg-accent text-white hover:bg-accent-hover shadow-lg shadow-accent/20",
    outline: "border border-border bg-transparent hover:bg-surface text-primary",
    ghost: "bg-transparent hover:bg-surface text-muted hover:text-primary",
  };

  // Size-specific classes
  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg",
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}