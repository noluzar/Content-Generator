import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  Icon?: React.ElementType;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  Icon,
  isLoading = false,
  className,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 focus:ring-offset-gray-50 transition-all duration-150 ease-in-out disabled:opacity-60 disabled:cursor-not-allowed";
  
  const variantStyles = {
    primary: "text-white bg-sky-600 hover:bg-sky-700 focus:ring-sky-500",
    secondary: "text-sky-700 bg-sky-100 hover:bg-sky-200 focus:ring-sky-500 dark:text-sky-300 dark:bg-slate-700 dark:hover:bg-slate-600 dark:focus:ring-sky-400",
  };
  
  const iconColorClasses = {
    primary: 'text-sky-100', // This should work fine for dark text on primary button
    secondary: 'text-sky-600 dark:text-sky-300'
  }

  return (
    <button
      type="submit" // Default to submit, can be overridden by props
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {Icon && !isLoading && <Icon className={`-ml-1 mr-2 h-5 w-5 ${iconColorClasses[variant]}`} aria-hidden="true" />}
      {children}
    </button>
  );
};

export default Button;