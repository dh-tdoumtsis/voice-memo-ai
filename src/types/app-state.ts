export type AppState =
  | { status: "idle" }
  | { status: "recording" }
  | { status: "transcribing" }
  | { status: "thinking"; transcript: string }
  | { status: "complete"; transcript: string; summary: string }
  | { status: "error"; message: string };

export type Status =
  | { type: "idle" }
  | { type: "recording" }
  | { type: "transcribing" }
  | { type: "thinking" }
  | { type: "error"; message: string };

export function getDisplayStatus(state: AppState, hasCompletion: boolean): Status {
  if (state.status === "error") {
    return { type: "error", message: state.message };
  }
  if (state.status === "idle" || state.status === "complete") {
    return { type: "idle" };
  }
  if (state.status === "thinking") {
    // Show "thinking" only before streaming starts, hide once summary appears
    return hasCompletion ? { type: "idle" } : { type: "thinking" };
  }
  return { type: state.status };
}
