
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { ProcessedStoryParams, ProcessedPoemParams } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // This error will be caught by the calling function if API_KEY is not set.
  // It's better to let the app initialize and show an error in the UI.
  console.error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY || "fallback_key_for_initialization_only_must_be_overridden_by_env" }); // Provide a fallback to prevent constructor error if API_KEY is undefined during init, but operations will fail.

const model = 'gemini-2.5-flash-preview-04-17';

export const generateStory = async (params: ProcessedStoryParams): Promise<string> => {
  if (!API_KEY) throw new Error("API Key for Gemini not configured.");
  
  const systemInstruction = `You are a master storyteller AI, capable of weaving intricate narratives and bringing characters to life. Your goal is to generate compelling creative writing based on user specifications.
Focus on vivid descriptions, strong character arcs (even in short pieces), and a well-paced plot. The story should be coherent and complete within the specified length.
Do not use markdown formatting in your response. Output plain text only.`;

  const userPrompt = `Generate a story with the following characteristics:
- Genre: ${params.genre}
- Approximate Length: ${params.lengthDetails.words} words
- Number of Main Characters: ${params.numCharacters}
- Setting Description: ${params.settingDescription}
${params.plotOutline ? `- Plot Outline: ${params.plotOutline}` : '- Plot: Develop a compelling plot creatively.'}

Please ensure the story is engaging, well-paced, and has a satisfying (though not necessarily happy) resolution appropriate for the genre.
Pay attention to character development, even for a short piece. Avoid clichés unless subverting them.
The story must be entirely original.`;

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: model,
      contents: userPrompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.75, // Moderate temperature for creative but coherent stories
        topP: 0.95,
        topK: 40,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Error generating story:", error);
    if (error instanceof Error) {
        throw new Error(`Failed to generate story: ${error.message}`);
    }
    throw new Error("Failed to generate story due to an unknown error.");
  }
};

export const generatePoem = async (params: ProcessedPoemParams): Promise<string> => {
  if (!API_KEY) throw new Error("API Key for Gemini not configured.");

  const systemInstruction = `You are an eloquent poet AI, skilled in various poetic forms and able to evoke deep emotions and imagery.
Your goal is to craft beautiful poetry based on user specifications.
Pay close attention to rhythm, meter (where appropriate for the style), word choice, and figurative language.
Do not use markdown formatting in your response. Output plain text only.`;
  
  const userPrompt = `Compose a poem with the following characteristics:
- Style: ${params.poemStyle}
- Approximate Length: ${params.lengthDetails.lines} lines (or ${params.lengthDetails.stanzas} stanzas)
- Theme: ${params.theme}
- Mood: ${params.mood}
${params.rhymeScheme ? `- Rhyme Scheme: ${params.rhymeScheme}. If the style (e.g., Haiku, Free Verse) inherently dictates no or a specific scheme, prioritize the style's conventions.` : '- Rhyme Scheme: At your creative discretion, appropriate for the style and mood.'}

Special instructions for specific styles:
- If Haiku: Strictly adhere to the 5-7-5 syllable structure per line.
- If Sonnet: Craft a 14-line poem, respecting traditional sonnet forms (e.g., Shakespearean ABAB CDCD EFEF GG, or Petrarchan ABBAABBA CDECDE/CDCDCD). You may choose or adapt a form if not specified.
- If Limerick: Ensure it follows the AABBA rhyme scheme and characteristic rhythm.
- For Free Verse: Focus on natural speech rhythms, imagery, and emotional expression without adhering to a strict metrical or rhyme pattern.

Focus on vivid imagery, emotional resonance, and lyrical quality. The poem must be entirely original.`;

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: model,
      contents: userPrompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7, // Slightly lower temp for poetry to maintain form and coherence
        topP: 0.95,
        topK: 50,
      }
    });
    return response.text;
  } catch (error)
  {
    console.error("Error generating poem:", error);
    if (error instanceof Error) {
        throw new Error(`Failed to generate poem: ${error.message}`);
    }
    throw new Error("Failed to generate poem due to an unknown error.");
  }
};
    