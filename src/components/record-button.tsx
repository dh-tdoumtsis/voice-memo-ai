import { Button } from "@/components/ui/button";

interface RecordButtonProps {
  isRecording: boolean;
  onStart: () => void;
  onStop: () => void;
  disabled?: boolean;
}

export function RecordButton({ isRecording, onStart, onStop, disabled }: RecordButtonProps) {
  if (!isRecording) {
    return (
      <Button
        onClick={onStart}
        disabled={disabled}
        className="h-20 w-20 rounded-full bg-red-500 hover:bg-red-600 shadow-red-200 shadow-xl transition-all hover:scale-105 active:scale-95"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
          />
        </svg>
      </Button>
    );
  }

  return (
    <Button
      onClick={onStop}
      variant="outline"
      className="h-20 w-20 rounded-full border-4 border-red-100 bg-white hover:bg-red-50 animate-pulse"
    >
      <div className="w-8 h-8 bg-red-500 rounded-md" />
    </Button>
  );
}
