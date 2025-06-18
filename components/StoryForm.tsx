import React from 'react';
import { StoryParameters } from '../types';
import TextField from './ui/TextField';
import TextAreaField from './ui/TextAreaField';
import SelectField from './ui/SelectField';
import Button from './ui/Button';
import { STORY_GENRES, STORY_LENGTHS, SparklesIcon, PenIcon } from '../constants';

interface StoryFormProps {
  parameters: StoryParameters;
  onParametersChange: (params: StoryParameters) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

const StoryForm: React.FC<StoryFormProps> = ({ parameters, onParametersChange, onSubmit, isLoading }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    onParametersChange({ ...parameters, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-white dark:bg-slate-800 rounded-lg shadow-xl dark:border dark:border-slate-600">
      <SelectField
        label="Genre"
        name="genre"
        value={parameters.genre}
        onChange={handleChange}
        options={STORY_GENRES}
        required
        Icon={PenIcon}
      />
      <TextField
        label="Number of Main Characters"
        name="numCharacters"
        type="number"
        value={parameters.numCharacters}
        onChange={handleChange}
        placeholder="e.g., 1, 2, 3"
        required
        min="1"
        max="10"
        Icon={PenIcon}
      />
      <TextAreaField
        label="Setting Description"
        name="settingDescription"
        value={parameters.settingDescription}
        onChange={handleChange}
        placeholder="e.g., A bustling futuristic city, a quiet medieval village, a spaceship lost in cosmos"
        rows={3}
        required
        Icon={PenIcon}
      />
      <TextAreaField
        label="Plot Outline (Optional)"
        name="plotOutline"
        value={parameters.plotOutline}
        onChange={handleChange}
        placeholder="e.g., A detective investigates a mysterious disappearance, leading to an ancient conspiracy."
        rows={4}
        Icon={PenIcon}
      />
      <SelectField
        label="Desired Story Length"
        name="storyLength"
        value={parameters.storyLength}
        onChange={handleChange}
        options={STORY_LENGTHS}
        required
        Icon={PenIcon}
      />
      <Button type="submit" isLoading={isLoading} Icon={SparklesIcon} className="w-full">
        Generate Story
      </Button>
    </form>
  );
};

export default StoryForm;