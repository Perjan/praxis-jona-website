export default function SectionWithColor({ 
  children, 
  backgroundClassName,
  style 
}: { 
  children: React.ReactNode, 
  backgroundClassName: string,
  style?: React.CSSProperties 
}) {
    return (
      <div className={backgroundClassName} style={style}>
        <div className="mx-auto max-w-7xl text-leading py-8 px-6 lg:px-8">
          {children}
        </div>
      </div>
    )
  }