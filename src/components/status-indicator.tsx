import type { Status } from "@/types/app-state";

interface StatusIndicatorProps {
  status: Status;
}

const STATUS_CONFIG = {
  recording: { color: "text-red-500", icon: "●", text: "Recording..." },
  transcribing: { color: "text-amber-500", icon: "⚡", text: "Transcribing..." },
  thinking: { color: "text-indigo-500", icon: "🧠", text: "Thinking..." },
} as const;

export function StatusIndicator({ status }: StatusIndicatorProps) {
  if (status.type === "error") {
    return (
      <div className="min-h-[24px] text-sm font-medium">
        <span className="text-red-500 flex items-center gap-2">❌ {status.message}</span>
      </div>
    );
  }

  if (status.type === "idle") {
    return <div className="min-h-[24px] text-sm font-medium" />;
  }

  const config = STATUS_CONFIG[status.type];

  return (
    <div className="min-h-[24px] text-sm font-medium">
      <span className={`${config.color} flex items-center gap-2`}>
        {config.icon} {config.text}
      </span>
    </div>
  );
}
