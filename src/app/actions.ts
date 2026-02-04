"use server";

import { transcribe } from "@/lib/transcription";
import { isValidFile } from "@/lib/validation";
import type { ProviderOption } from "@/lib/providers";
import { PROVIDER_CONFIG, getValidProvidersSync } from "@/lib/providers";

export async function transcribeAudio(formData: FormData) {
  try {
    const file = formData.get("file");
    const provider = formData.get("provider");

    if (!isValidFile(file)) {
      return { success: false, error: "Invalid or missing audio file" };
    }

    const text = await transcribe(file, provider);

    return { success: true, text };
  } catch (error) {
    console.error("Transcription error:", error);
    return { success: false, error: "Transcription failed" };
  }
}

export async function getAvailableProviders(): Promise<{
  providers: ProviderOption[];
}> {
  const available = getValidProvidersSync();

  const providers: ProviderOption[] = available.map((p) => ({
    value: p,
    label: PROVIDER_CONFIG[p].label,
  }));

  return {
    providers,
  };
}