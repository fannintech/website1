import {
  Activity,
  Briefcase,
  Cloud,
  Compass,
  DatabaseBackup,
  FolderKanban,
  MapPin,
  MonitorSmartphone,
  Network,
  Shield,
  ShieldCheck,
  Sparkles,
  Zap,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Activity,
  Briefcase,
  Cloud,
  Compass,
  DatabaseBackup,
  FolderKanban,
  MapPin,
  MonitorSmartphone,
  Network,
  Shield,
  ShieldCheck,
  Sparkles,
  Zap,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Comp = icons[name] ?? MonitorSmartphone;
  return <Comp className={className} aria-hidden />;
}
