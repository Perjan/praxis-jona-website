import SectionWithColor from "../SectionWithColor";

interface WarningProps {
  message: string;
  color?: string;
}

export default function Warning({ message, color = 'bg-red-400/35' }: WarningProps) {
  return (
    <div className="overflow-hidden px-4 lg:px-0 rounded-xl lg:rounded-2xl bg-white max-w-3xl mx-auto sm:mb-8">
      <SectionWithColor backgroundClassName={color}>
        <p className="mt-2 text-xl max-w-3xl mx-auto font-medium text-center leading-8 text-primaryLighter">
          {message}
        </p>
      </SectionWithColor>
    </div>
  );
} 