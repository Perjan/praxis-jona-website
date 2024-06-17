export default function SectionWithColor({ children, backgroundClassName }: { children: React.ReactNode, backgroundClassName: string }) {
    return (
      <div className={backgroundClassName}>
        <div className="mx-auto max-w-7xl text-leading py-8 px-6 lg:px-8">
          {children}
        </div>
      </div>
    )
  }