import { hasApiKey } from "./api-keys";

export type AIProvider = "mock" | "gemini" | "openai";
export type LLMProvider = Exclude<AIProvider, "mock">;

export interface ProviderOption {
  value: AIProvider;
  label: string;
}

// Centralized provider configuration with all metadata
export const PROVIDER_CONFIG = {
  gemini: { label: "Gemini", priority: 1 },
  openai: { label: "OpenAI", priority: 2 },
  mock: { label: "Mock", priority: 3 },
} as const;

export function getProviderLabel(provider: AIProvider): string {
  return PROVIDER_CONFIG[provider].label;
}

// Server-side only: Get available providers based on API keys
export function getValidProvidersSync(): AIProvider[] {
  const IS_DEV = process.env.NODE_ENV === "development";

  const available = (Object.keys(PROVIDER_CONFIG) as AIProvider[])
    .filter((p) => {
      if (p === "mock") return IS_DEV;
      return hasApiKey(p);
    })
    .sort((a, b) => PROVIDER_CONFIG[a].priority - PROVIDER_CONFIG[b].priority);

  if (available.length === 0) {
    throw new Error(
      "No valid AI providers configured. Please set GOOGLE_GENERATIVE_AI_API_KEY or OPENAI_API_KEY in .env"
    );
  }

  return available;
}

export function resolveProvider(override: unknown): AIProvider {
  const validProviders = getValidProvidersSync();

  if (typeof override !== "string") return validProviders[0];

  const normalized = override.trim().toLowerCase() as AIProvider;
  return validProviders.includes(normalized) ? normalized : validProviders[0];
}
