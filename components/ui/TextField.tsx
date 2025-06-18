import React from 'react';

interface TextFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  Icon?: React.ElementType;
  min?: string | number;
  max?: string | number;
  disabled?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = 'text',
  required = false,
  Icon,
  min,
  max,
  disabled = false,
}) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-sky-700 dark:text-sky-200 mb-1">
        {label} {required && <span className="text-red-500 dark:text-red-400">*</span>}
      </label>
      <div className="relative">
        {Icon && <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-slate-400 dark:text-slate-500" aria-hidden="true" />
        </div>}
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          min={min}
          max={max}
          disabled={disabled}
          className={`block w-full ${Icon ? 'pl-10' : 'pl-3'} pr-3 py-2.5 
                     bg-white dark:bg-slate-700 
                     border border-slate-300 dark:border-slate-600 
                     rounded-md shadow-sm 
                     text-slate-900 dark:text-slate-100
                     placeholder-slate-400 dark:placeholder-slate-500 
                     focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 sm:text-sm 
                     disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-150`}
        />
      </div>
    </div>
  );
};

export default TextField;