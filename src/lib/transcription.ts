import type { AIProvider,  } from "./providers";
import { resolveProvider } from "./providers";
import { getGeminiApiKey } from "./api-keys";
import { DEMO_TRANSCRIPT } from "./demo-data";
import { MODEL_IDS, TRANSCRIBE_PROMPT, AUDIO_MIME_TYPE } from "./ai-config";

async function transcribeWithMock(): Promise<string> {
  return DEMO_TRANSCRIPT;
}

async function transcribeWithGemini(file: File): Promise<string> {
  const { GoogleGenerativeAI } = await import("@google/generative-ai");
  const genAI = new GoogleGenerativeAI(getGeminiApiKey());
  const model = genAI.getGenerativeModel({ model: MODEL_IDS.gemini });

  const arrayBuffer = await file.arrayBuffer();
  const base64Audio = Buffer.from(arrayBuffer).toString("base64");

  const result = await model.generateContent([
    { inlineData: { mimeType: AUDIO_MIME_TYPE, data: base64Audio } },
    { text: TRANSCRIBE_PROMPT },
  ]);

  return result.response.text();
}

async function transcribeWithOpenAI(file: File): Promise<string> {
  const { experimental_transcribe: transcribe } = await import("ai");
  const { openai } = await import("@ai-sdk/openai");

  const transcript = await transcribe({
    model: openai.transcription(MODEL_IDS.whisper),
    audio: await file.arrayBuffer(),
  });

  return transcript.text;
}

const TRANSCRIBERS: Record<AIProvider, (file: File) => Promise<string>> = {
  mock: transcribeWithMock,
  gemini: transcribeWithGemini,
  openai: transcribeWithOpenAI,
};

export async function transcribe(file: File, providerOverride?: unknown): Promise<string> {
  const provider = resolveProvider(providerOverride);
  const transcriber = TRANSCRIBERS[provider];
  if (!transcriber) throw new Error(`Unknown provider: ${provider}`);
  return transcriber(file);
}
