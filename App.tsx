
import React, { useContext } from 'react';
import CreativeWriterTool from './components/CreativeWriterTool';
import { SparklesIcon, SunIcon, MoonIcon } from './constants';
import { ThemeContext } from './contexts/ThemeContext';

const App: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  if (!toggleTheme) { // Should not happen if ThemeProvider is set up correctly
    return <div>Loading theme...</div>;
  }

  const appBackgroundClass = theme === 'dark' 
    ? 'from-slate-900 via-slate-800 to-sky-900' 
    : 'from-gray-100 via-gray-50 to-sky-100';
  
  const selectionClass = theme === 'dark'
    ? 'selection:bg-sky-500 selection:text-white'
    : 'selection:bg-sky-300 selection:text-sky-900';


  return (
    <div className={`min-h-screen bg-gradient-to-br ${appBackgroundClass} text-slate-900 dark:text-slate-100 flex flex-col items-center p-4 ${selectionClass} transition-colors duration-300 ease-in-out`}>
      <header className="w-full max-w-5xl py-8">
        {/* Flex container for title and button row */}
        <div className="relative flex items-center justify-center"> {/* Changed justify-between to justify-center, added relative */}
          {/* Centered block for icon and title */}
          <div className="flex items-center space-x-3">
            <SparklesIcon className="h-10 w-10 text-sky-500 dark:text-sky-400" />
            <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-purple-600 dark:from-sky-400 dark:to-purple-500">
              Creative Writing Generator
            </h1>
          </div>
          {/* Theme toggle button wrapper for absolute positioning */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors duration-150"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <SunIcon className="h-6 w-6" />
              ) : (
                <MoonIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        <p className="mt-3 text-lg text-center text-slate-600 dark:text-slate-300">
          Craft unique stories and poems with the power of AI.
        </p>
      </header>
      
      <main className="w-full max-w-5xl flex-grow">
        <CreativeWriterTool />
      </main>

      <footer className="w-full max-w-5xl py-6 text-center text-sm text-slate-500 dark:text-slate-400">
        <p>&copy; {new Date().getFullYear()} AI Creative Studio. Powered by Gemini.</p>
      </footer>
    </div>
  );
};

export default App;
