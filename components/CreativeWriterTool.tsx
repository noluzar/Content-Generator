import React, { useState, useCallback } from 'react';
import { WritingMode, StoryParameters, PoemParameters, ProcessedStoryParams, ProcessedPoemParams } from '../types';
import StoryForm from './StoryForm';
import PoemForm from './PoemForm';
import GeneratedOutput from './GeneratedOutput';
import { generateStory, generatePoem } from '../services/geminiService';
import { STORY_LENGTH_DETAILS, POEM_LENGTH_DETAILS } from '../constants';

const CreativeWriterTool: React.FC = () => {
  const [activeMode, setActiveMode] = useState<WritingMode>(WritingMode.STORY);
  const [storyParams, setStoryParams] = useState<StoryParameters>({
    genre: '',
    numCharacters: '1',
    settingDescription: '',
    plotOutline: '',
    storyLength: '',
  });
  const [poemParams, setPoemParams] = useState<PoemParameters>({
    poemStyle: '',
    theme: '',
    mood: '',
    rhymeScheme: '',
    poemLength: '',
  });

  const [generatedContent, setGeneratedContent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleStorySubmit = useCallback(async () => {
    if (!process.env.API_KEY) {
        setError("Gemini API Key is not configured. Please set the API_KEY environment variable.");
        setIsLoading(false);
        return;
    }
    setIsLoading(true);
    setError(null);
    setGeneratedContent(null);
    try {
      const numChars = parseInt(storyParams.numCharacters, 10);
      if (isNaN(numChars) || numChars < 1) {
        throw new Error("Number of characters must be a positive integer.");
      }
      const processedParams: ProcessedStoryParams = {
        ...storyParams,
        numCharacters: numChars,
        lengthDetails: STORY_LENGTH_DETAILS[storyParams.storyLength] || { words: '500' },
      };
      const result = await generateStory(processedParams);
      setGeneratedContent(result);
    } catch (e: any) {
      setError(e.message || 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, [storyParams]);

  const handlePoemSubmit = useCallback(async () => {
    if (!process.env.API_KEY) {
        setError("Gemini API Key is not configured. Please set the API_KEY environment variable.");
        setIsLoading(false);
        return;
    }
    setIsLoading(true);
    setError(null);
    setGeneratedContent(null);
    try {
      const processedParams: ProcessedPoemParams = {
        ...poemParams,
        lengthDetails: POEM_LENGTH_DETAILS[poemParams.poemLength] || { stanzas: '5', lines: '20' },
      };
      const result = await generatePoem(processedParams);
      setGeneratedContent(result);
    } catch (e: any) {
      setError(e.message || 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, [poemParams]);
  
  const resetOutput = () => {
    setGeneratedContent(null);
    setError(null);
  }

  const switchMode = (mode: WritingMode) => {
    setActiveMode(mode);
    resetOutput();
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-center border-b border-slate-300 dark:border-slate-700">
        {(Object.values(WritingMode) as WritingMode[]).map((mode) => (
          <button
            key={mode}
            onClick={() => switchMode(mode)}
            className={`px-6 py-3 text-lg font-medium capitalize focus:outline-none transition-colors duration-200
                        ${activeMode === mode 
                          ? 'border-b-2 border-sky-600 dark:border-sky-500 text-sky-600 dark:text-sky-400' 
                          : 'text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-300'
                        }`}
          >
            {mode}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-5 lg:col-span-4">
          {activeMode === WritingMode.STORY && (
            <StoryForm
              parameters={storyParams}
              onParametersChange={setStoryParams}
              onSubmit={handleStorySubmit}
              isLoading={isLoading}
            />
          )}
          {activeMode === WritingMode.POEM && (
            <PoemForm
              parameters={poemParams}
              onParametersChange={setPoemParams}
              onSubmit={handlePoemSubmit}
              isLoading={isLoading}
            />
          )}
        </div>
        <div className="md:col-span-7 lg:col-span-8">
          <GeneratedOutput
            content={generatedContent}
            isLoading={isLoading}
            error={error}
            title={activeMode === WritingMode.STORY ? "Story" : "Poem"}
          />
        </div>
      </div>
    </div>
  );
};

export default CreativeWriterTool;