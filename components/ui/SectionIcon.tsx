import {
  BadgeCheck,
  BookOpen,
  Building2,
  Cpu,
  FilePenLine,
  FileSearch,
  FileText,
  FolderOpen,
  GraduationCap,
  Handshake,
  MessagesSquare,
  RefreshCw,
  Scale,
  Siren,
  UserRoundSearch,
  type LucideIcon,
} from "lucide-react";

export type SectionIconName =
  | "badge-check"
  | "book-open"
  | "building"
  | "cpu"
  | "file-pen"
  | "file-search"
  | "file-text"
  | "folder-open"
  | "graduation-cap"
  | "handshake"
  | "messages-square"
  | "refresh-cw"
  | "scale"
  | "siren"
  | "user-round-search";

const ICONS: Record<SectionIconName, LucideIcon> = {
  "badge-check": BadgeCheck,
  "book-open": BookOpen,
  building: Building2,
  cpu: Cpu,
  "file-pen": FilePenLine,
  "file-search": FileSearch,
  "file-text": FileText,
  "folder-open": FolderOpen,
  "graduation-cap": GraduationCap,
  handshake: Handshake,
  "messages-square": MessagesSquare,
  "refresh-cw": RefreshCw,
  scale: Scale,
  siren: Siren,
  "user-round-search": UserRoundSearch,
};

type SectionIconProps = {
  name: SectionIconName;
  className?: string;
};

/** Konzistentná váha strokeWidth=1.5 pre marketingové dlaždice. */
export function SectionIcon({
  name,
  className = "size-5",
}: SectionIconProps) {
  const Icon = ICONS[name];
  return <Icon aria-hidden className={className} strokeWidth={1.5} />;
}
