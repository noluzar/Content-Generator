import React from 'react';
import { Option } from './types';

export const STORY_GENRES: Option[] = [
  { value: 'Fantasy', label: 'Fantasy' },
  { value: 'Science Fiction', label: 'Science Fiction' },
  { value: 'Mystery', label: 'Mystery' },
  { value: 'Romance', label: 'Romance' },
  { value: 'Horror', label: 'Horror' },
  { value: 'Historical Fiction', label: 'Historical Fiction' },
  { value: 'Thriller', label: 'Thriller' },
  { value: 'Slice of Life', label: 'Slice of Life' },
  { value: 'Adventure', label: 'Adventure' },
  { value: 'Comedy', label: 'Comedy' },
];

export const STORY_LENGTHS: Option[] = [
  { value: 'short', label: 'Short (~300-500 words)' },
  { value: 'medium', label: 'Medium (~700-1000 words)' },
  { value: 'long', label: 'Long (~1200-1500 words)' },
];

export const POEM_STYLES: Option[] = [
  { value: 'Free Verse', label: 'Free Verse' },
  { value: 'Haiku', label: 'Haiku (5-7-5 syllables)' },
  { value: 'Sonnet', label: 'Sonnet (14 lines)' },
  { value: 'Limerick', label: 'Limerick' },
  { value: 'Ballad', label: 'Ballad' },
  { value: 'Ode', label: 'Ode' },
  { value: 'Elegy', label: 'Elegy' },
  { value: 'Villanelle', label: 'Villanelle' },
];

export const POEM_MOODS: Option[] = [
  { value: 'Joyful', label: 'Joyful' },
  { value: 'Melancholic', label: 'Melancholic' },
  { value: 'Reflective', label: 'Reflective' },
  { value: 'Humorous', label: 'Humorous' },
  { value: 'Hopeful', label: 'Hopeful' },
  { value: 'Nostalgic', label: 'Nostalgic' },
  { value: 'Serene', label: 'Serene' },
  { value: 'Dramatic', label: 'Dramatic' },
];

export const POEM_LENGTHS: Option[] = [
  { value: 'short', label: 'Short (3-5 stanzas / ~12-20 lines)' },
  { value: 'medium', label: 'Medium (6-10 stanzas / ~24-40 lines)' },
  { value: 'long', label: 'Long (10+ stanzas / ~40+ lines)' },
];

export const STORY_LENGTH_DETAILS: { [key: string]: { words: string } } = {
  short: { words: '300-500' },
  medium: { words: '700-1000' },
  long: { words: '1200-1500' },
};

export const POEM_LENGTH_DETAILS: { [key: string]: { stanzas: string, lines: string } } = {
  short: { stanzas: '3-5', lines: '12-20' },
  medium: { stanzas: '6-10', lines: '24-40' },
  long: { stanzas: '10-15', lines: '40+' },
};

// Heroicons: Sparkles
export const SparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L1.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.25 12L17 14.25l-1.25-2.25L13.5 11l2.25-1.25L17 7.5l1.25 2.25L20.5 11l-2.25 1.25z" />
  </svg>
);

// Heroicons: DocumentDuplicate (for Copy)
export const CopyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
  </svg>
);

// Pen icon for forms
export const PenIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
  </svg>
);

// Heroicons: ArrowDownTray (for Download)
export const DownloadIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
);

// Heroicons: Sun
export const SunIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-6.364-.386l1.591-1.591M3 12h2.25m.386-6.364l1.591 1.591M12 12a2.25 2.25 0 00-2.25 2.25 2.25 2.25 0 002.25 2.25 2.25 2.25 0 002.25-2.25A2.25 2.25 0 0012 12z" />
  </svg>
);

// Heroicons: Moon
export const MoonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21c3.93 0 7.403-2.031 9.002-5.001z" />
  </svg>
);