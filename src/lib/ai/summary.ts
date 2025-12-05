export async function summarize(prompt: string): Promise<Response> {
  const { google } = await import('@ai-sdk/google');
  const { streamText, createUIMessageStreamResponse } = await import('ai');

  const result = streamText({
    model: google('gemini-2.5-flash'),
    system: `You are a concise assistant. Summarize the user's voice memo transcript into key takeaways and action items. Use markdown: ### Key Takeaways, ### Action Items, and bullet points.`,
    prompt,
  });

  return createUIMessageStreamResponse({ stream: result.toUIMessageStream() });
}
