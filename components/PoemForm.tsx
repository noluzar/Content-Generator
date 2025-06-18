import React from 'react';
import { PoemParameters } from '../types';
import TextField from './ui/TextField';
import SelectField from './ui/SelectField';
import Button from './ui/Button';
import { POEM_STYLES, POEM_MOODS, POEM_LENGTHS, SparklesIcon, PenIcon } from '../constants';

interface PoemFormProps {
  parameters: PoemParameters;
  onParametersChange: (params: PoemParameters) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

const PoemForm: React.FC<PoemFormProps> = ({ parameters, onParametersChange, onSubmit, isLoading }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    onParametersChange({ ...parameters, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-white dark:bg-slate-800 rounded-lg shadow-xl dark:border dark:border-slate-600">
      <SelectField
        label="Poem Style"
        name="poemStyle"
        value={parameters.poemStyle}
        onChange={handleChange}
        options={POEM_STYLES}
        required
        Icon={PenIcon}
      />
      <TextField
        label="Theme"
        name="theme"
        value={parameters.theme}
        onChange={handleChange}
        placeholder="e.g., Love, Nature, Loss, Hope, Dreams"
        required
        Icon={PenIcon}
      />
      <SelectField
        label="Mood"
        name="mood"
        value={parameters.mood}
        onChange={handleChange}
        options={POEM_MOODS}
        required
        Icon={PenIcon}
      />
      <TextField
        label="Rhyme Scheme (Optional)"
        name="rhymeScheme"
        value={parameters.rhymeScheme}
        onChange={handleChange}
        placeholder="e.g., AABB, ABAB, or leave blank for free verse / AI choice"
        Icon={PenIcon}
      />
      <SelectField
        label="Desired Poem Length"
        name="poemLength"
        value={parameters.poemLength}
        onChange={handleChange}
        options={POEM_LENGTHS}
        required
        Icon={PenIcon}
      />
      <Button type="submit" isLoading={isLoading} Icon={SparklesIcon} className="w-full">
        Generate Poem
      </Button>
    </form>
  );
};

export default PoemForm;