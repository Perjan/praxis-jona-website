import Link from 'next/link'
import { Constants } from './Constants'

export function AppDownloadLink(props) {
    const url = Constants.downloadUrl;
    return <Link data-umami-event="mc-app-download-button-in-articles" className="rounded bg-indigo-50 px-2 py-1 text-sm font-semibold text-primary shadow-sm hover:bg-indigo-100 no-underline" target="_blank" href={url} {...props}>
      {props.children}
    </Link>
  }

  export function MSAppDownloadLink(props) {
    const url = Constants.msDownloadUrl;
    return <Link data-umami-event="ms-app-download-button-in-articles" className="rounded bg-indigo-50 px-2 py-1 text-sm font-semibold text-primary shadow-sm hover:bg-indigo-100 no-underline" target="_blank" href={url} {...props}>
      {props.children}
    </Link>
  }