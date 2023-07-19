import Link from 'next/link'

export function AppDownloadLink(props) {
    const url = "https://apps.apple.com/app/apple-store/id989642198?pt=118449936&ct=website&mt=8"
    return <Link className="rounded bg-indigo-50 px-2 py-1 text-sm font-semibold text-primary shadow-sm hover:bg-indigo-100 no-underline" target="_blank" href={url} {...props}>
      {props.children}
    </Link>
  }