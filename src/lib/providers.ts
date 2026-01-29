export type AIProvider = "mock" | "gemini" | "openai";
export type LLMProvider = Exclude<AIProvider, "mock">;

const IS_DEV = process.env.NODE_ENV === "development";
const VALID_PROVIDERS: AIProvider[] = IS_DEV ? ["mock", "gemini", "openai"] : ["gemini", "openai"];

const PROVIDER_LABELS: Record<AIProvider, string> = {
  mock: "Mock",
  gemini: "Gemini",
  openai: "OpenAI",
};

const DEFAULT_FALLBACK_PROVIDER: AIProvider = IS_DEV ? "mock" : "gemini";

const rawProvider = process.env.AI_PROVIDER || DEFAULT_FALLBACK_PROVIDER;
export const DEFAULT_AI_PROVIDER: AIProvider = VALID_PROVIDERS.includes(rawProvider as AIProvider)
  ? (rawProvider as AIProvider)
  : DEFAULT_FALLBACK_PROVIDER;

export const PROVIDER_OPTIONS: { value: AIProvider; label: string }[] = VALID_PROVIDERS.map(
  (p) => ({ value: p, label: PROVIDER_LABELS[p] })
);

export function resolveProvider(override: unknown): AIProvider {
  const provider = typeof override === "string" ? override.trim().toLowerCase() : "";
  if (provider && VALID_PROVIDERS.includes(provider as AIProvider)) {
    return provider as AIProvider;
  }
  return DEFAULT_AI_PROVIDER;
}
