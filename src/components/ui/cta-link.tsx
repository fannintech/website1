import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@/components/ui/button";

type CtaLinkProps = ButtonProps & {
  href: string;
};

export function CtaLink({
  href,
  children,
  className,
  variant = "default",
  size = "default",
  ...props
}: CtaLinkProps) {
  return (
    <Button asChild variant={variant} size={size} className={cn(className)} {...props}>
      <Link href={href}>{children}</Link>
    </Button>
  );
}
