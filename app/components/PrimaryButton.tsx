import Link from "next/link";

interface PrimaryButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export default function PrimaryButton({
  href,
  children,
  className = "",
  fullWidth = false,
}: PrimaryButtonProps) {
  return (
    <Link
      href={href}
      className={`rounded-lg bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${fullWidth 
        ? 'w-full flex items-center justify-center hover:bg-primaryLighter hover:shadow-md' 
        : 'inline-flex items-center justify-center hover:bg-primaryLighter hover:shadow-md hover:scale-105'
      } ${className}`}
    >
      {children}
    </Link>
  );
} 