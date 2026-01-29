import type { Status } from "@/types/app-state";

interface StatusIndicatorProps {
  status: Status;
}

export function StatusIndicator({ status }: StatusIndicatorProps) {
  if (status.type === "error") {
    return (
      <div className="min-h-[24px] text-sm font-medium">
        <span className="text-red-500 flex items-center gap-2">❌ {status.message}</span>
      </div>
    );
  }

  if (status.type === "recording") {
    return (
      <div className="min-h-[24px] text-sm font-medium">
        <span className="text-red-500 flex items-center gap-2">● Recording...</span>
      </div>
    );
  }

  if (status.type === "transcribing") {
    return (
      <div className="min-h-[24px] text-sm font-medium">
        <span className="text-amber-500 flex items-center gap-2">⚡ Transcribing...</span>
      </div>
    );
  }

  if (status.type === "thinking") {
    return (
      <div className="min-h-[24px] text-sm font-medium">
        <span className="text-indigo-500 flex items-center gap-2">🧠 Thinking...</span>
      </div>
    );
  }

  return <div className="min-h-[24px] text-sm font-medium" />;
}
