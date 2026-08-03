type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
  onNavy?: boolean;
};

export function Eyebrow({ children, className = "", onNavy }: EyebrowProps) {
  return (
    <p
      className={`text-eyebrow ${onNavy ? "text-magenta-500" : "text-navy-700"} ${className}`}
    >
      {children}
    </p>
  );
}
