
export enum WritingMode {
  STORY = 'story',
  POEM = 'poem',
}

export interface StoryParameters {
  genre: string;
  numCharacters: string; // Using string for input field compatibility, parse to number later
  settingDescription: string;
  plotOutline: string;
  storyLength: string;
}

export interface PoemParameters {
  poemStyle: string;
  theme: string;
  mood: string;
  rhymeScheme: string;
  poemLength: string;
}

export interface Option {
  value: string;
  label: string;
}

export interface LengthDetail {
  words?: string;
  stanzas?: string;
  lines?: string;
}

export interface ProcessedStoryParams extends Omit<StoryParameters, 'storyLength' | 'numCharacters'> {
  lengthDetails: LengthDetail;
  numCharacters: number;
}

export interface ProcessedPoemParams extends Omit<PoemParameters, 'poemLength'> {
  lengthDetails: LengthDetail;
}
    