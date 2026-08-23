import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  priority?: boolean;
  showTagline?: boolean;
};

export function Logo({ className, priority = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center", className)}
      aria-label="Fannin Technologies home"
    >
      <Image
        src="/logos/fannin-technologies-logo.png"
        alt="Fannin Technologies — Your Technology Partner"
        width={210}
        height={59}
        priority={priority}
        className="h-10 w-auto md:h-11"
      />
    </Link>
  );
}
