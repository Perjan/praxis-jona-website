import Link from "next/link";

interface PrimaryButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  target?: string;
  rel?: string;
}

export default function PrimaryButton({
  href,
  children,
  className = "",
  fullWidth = false,
  target,
  rel,
}: PrimaryButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`rounded-lg bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${fullWidth 
        ? 'w-full justify-center hover:bg-primaryLighter hover:shadow-md' 
        : 'inline-flex justify-center hover:bg-primaryLighter hover:shadow-md hover:scale-105'
      } ${className}`}
    >
      {children}
    </Link>
  );
} 