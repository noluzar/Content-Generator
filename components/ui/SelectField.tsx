import React from 'react';
import { Option } from '../../types';

interface SelectFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
  required?: boolean;
  Icon?: React.ElementType;
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
  Icon,
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
        <select
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`block w-full ${Icon ? 'pl-10' : 'pl-3'} pr-10 py-2.5 
                     bg-white dark:bg-slate-700 
                     border border-slate-300 dark:border-slate-600 
                     rounded-md shadow-sm 
                     text-slate-900 dark:text-slate-100
                     focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 sm:text-sm 
                     disabled:opacity-50 disabled:cursor-not-allowed appearance-none transition-colors duration-150`}
        >
          <option value="" disabled hidden className="text-slate-500 dark:text-slate-400">Select {label.toLowerCase()}...</option>
          {options.map((option) => (
            <option key={option.value} value={option.value} className="bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100">
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500 dark:text-slate-400">
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
        </div>
      </div>
    </div>
  );
};

export default SelectField;