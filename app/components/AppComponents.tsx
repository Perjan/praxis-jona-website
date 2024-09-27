import Image from 'next/image';

export function AppCard({ app }) {
  return (
    <div className="flex flex-col">
      <h2 className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-primary">
        {app.name}
      </h2>
      <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-primaryLighter">
        <Image src={app.image} alt={app.name} width={600} height={400} className="mb-4 rounded-lg h-[400px] object-contain" />
        <p className="flex-auto">{app.description}</p>
        <ul className="mt-4 space-y-2 text-sm">
          {app.benefits.map((benefit, index) => (
            <li key={index} className="flex items-center">
              <svg className="h-4 w-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {benefit}
            </li>
          ))}
        </ul>
        <DownloadLinks downloadLink={app.downloadLink} />
      </dd>
    </div>
  )
}

function DownloadButton({ href, label }) {
  const buttonClass = "inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg transition-all duration-200 ease-in-out hover:bg-primaryLighter active:bg-primaryDarker active:scale-90 mr-2 mb-2"
  const arrowSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-1">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
  )

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={buttonClass}>
      {label} {arrowSvg}
    </a>
  )
}

export function DownloadLinks({ downloadLink }) {
  if (typeof downloadLink === 'string') {
    return (
      <div className="flex flex-wrap mt-6">
        <DownloadButton href={downloadLink} label="Jetzt Herunterladen" />
      </div>
    )
  }

  const links = []
  if ('website' in downloadLink) {
    links.push({ href: downloadLink.website, label: 'Website' })
    links.push({ href: downloadLink.ios, label: 'iOS' })
  } else {
    links.push({ href: downloadLink.ios, label: 'iOS' })
    links.push({ href: downloadLink.android, label: 'Android' })
  }

  return (
    <div className="flex flex-wrap mt-6">
      {links.map((link, index) => (
        <DownloadButton key={index} href={link.href} label={link.label} />
      ))}
    </div>
  )
}