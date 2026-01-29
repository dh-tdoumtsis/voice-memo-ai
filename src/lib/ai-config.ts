export const MODEL_IDS = {
    gemini: "gemini-2.5-flash",
    openai: "gpt-4o-mini",
    whisper: "whisper-1",
  } as const;
  
export const SUMMARY_SYSTEM_PROMPT =
    "You are a concise assistant. Summarize the user's voice memo transcript into key takeaways and action items. Use markdown: ### Key Takeaways, ### Action Items, and bullet points.";

export const TRANSCRIBE_PROMPT = "Transcribe this audio exactly.";
export const AUDIO_MIME_TYPE = "audio/mp3";