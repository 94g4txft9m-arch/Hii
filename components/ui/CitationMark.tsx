type CitationMarkProps = {
  citation: string;
  className?: string;
};

export function CitationMark({ citation, className = "" }: CitationMarkProps) {
  return (
    <span className={`citation-mark text-cite ${className}`}>{citation}</span>
  );
}
