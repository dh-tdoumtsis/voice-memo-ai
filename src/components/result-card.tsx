interface ResultCardProps {
  title: string;
  content: string;
  variant?: "transcript" | "summary";
}

export function ResultCard({ title, content, variant = "transcript" }: ResultCardProps) {
  if (variant === "transcript") {
    return (
      <div className="p-4 rounded-lg bg-slate-50 border border-slate-100 text-sm text-slate-600">
        <div className="font-semibold text-xs text-slate-400 uppercase mb-1">{title}</div>
        {content}
      </div>
    );
  }

  return (
    <div className="p-6 rounded-xl bg-white border border-indigo-50 shadow-sm ring-1 ring-indigo-100">
      <h3 className="font-semibold text-indigo-900 mb-3 flex items-center gap-2">
        <span className="text-lg">✨</span> {title}
      </h3>
      <div className="prose prose-sm prose-indigo max-w-none">
        <div className="whitespace-pre-wrap leading-relaxed text-slate-800">{content}</div>
      </div>
    </div>
  );
}
