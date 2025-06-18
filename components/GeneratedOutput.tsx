import React, { useState, useEffect, useContext } from 'react';
import LoadingIndicator from './ui/LoadingIndicator';
import { CopyIcon, DownloadIcon } from '../constants';
import Button from './ui/Button';
import { ThemeContext } from '../contexts/ThemeContext';

interface GeneratedOutputProps {
  content: string | null;
  isLoading: boolean;
  error: string | null;
  title: string;
}

const GeneratedOutput: React.FC<GeneratedOutputProps> = ({ content, isLoading, error, title }) => {
  const [copied, setCopied] = useState(false);
  const { theme } = useContext(ThemeContext);

  const handleCopy = async () => {
    if (content) {
      try {
        await navigator.clipboard.writeText(content);
        setCopied(true);
      } catch (err) {
        console.error('Failed to copy text: ', err);
        alert('Failed to copy text. Please try again or copy manually.');
      }
    }
  };

  const handleDownload = () => {
    if (content) {
      const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `generated-${title.toLowerCase().replace(/\s+/g, '-')}.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    }
  };
  
  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  if (isLoading) {
    return <LoadingIndicator text={`Generating your ${title.toLowerCase()}...`} />;
  }

  if (error) {
    return (
      <div className="p-6 bg-red-100 dark:bg-red-900/80 dark:border dark:border-red-700 rounded-lg shadow-xl text-red-700 dark:text-red-200">
        <h3 className="text-xl font-semibold mb-2 text-red-800 dark:text-red-100">Error Generating {title}</h3>
        <p className="whitespace-pre-wrap">{error}</p>
        <p className="mt-4 text-sm">Please check your inputs, ensure your API key is correctly configured in the environment, and try again.</p>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-xl dark:border dark:border-slate-600 text-center text-slate-500 dark:text-slate-400">
        <h3 className="text-xl font-semibold mb-2 text-slate-700 dark:text-slate-200">Your {title} Will Appear Here</h3>
        <p>Fill out the form and click "Generate" to see the magic happen!</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-xl dark:border dark:border-slate-600 flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-semibold text-sky-700 dark:text-sky-300">{title} Output</h3>
        <div className="flex space-x-2">
          <Button onClick={handleCopy} variant="secondary" Icon={CopyIcon} className="px-3 py-1.5 text-sm" type="button">
            {copied ? 'Copied!' : 'Copy'}
          </Button>
          <Button onClick={handleDownload} variant="secondary" Icon={DownloadIcon} className="px-3 py-1.5 text-sm" type="button">
            Download
          </Button>
        </div>
      </div>
      <div 
        className={`prose prose-sm max-w-none 
                    ${theme === 'dark' ? 'prose-invert' : ''} 
                    bg-gray-50 dark:bg-slate-700/60 
                    p-4 rounded-md overflow-x-auto overflow-y-auto whitespace-pre-wrap 
                    leading-relaxed text-slate-800 dark:text-slate-200 min-h-[200px] max-h-[60vh]
                    border border-slate-200 dark:border-slate-600 flex-grow`}
      >
        {content}
      </div>
    </div>
  );
};

export default GeneratedOutput;