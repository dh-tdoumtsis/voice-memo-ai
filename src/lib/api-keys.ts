const API_KEY_ENV_VARS = {
  gemini: "GOOGLE_GENERATIVE_AI_API_KEY",
  openai: "OPENAI_API_KEY",
} as const;

function getApiKey(envVar: string): string {
  const key = process.env[envVar];
  if (!key) throw new Error(`${envVar} is not set`);
  return key;
}

export function getGeminiApiKey(): string {
  return getApiKey(API_KEY_ENV_VARS.gemini);
}

export function getOpenAIApiKey(): string {
  return getApiKey(API_KEY_ENV_VARS.openai);
}
