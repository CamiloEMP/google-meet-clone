import React from 'react'
import { isSupported } from 'twilio-video'

export function IsSupported({
  children
}: React.PropsWithChildren<unknown>): JSX.Element {
  const is = isSupported

  const browsers = [
    {
      name: 'chrome',
      url: 'https://www.google.com/chrome/',
      image: 'https://www.google.com/chrome/static/images/chrome-logo.svg'
    },
    {
      name: 'chrome',
      url: 'https://www.mozilla.org/firefox/',
      image:
        'https://www.mozilla.org/media/protocol/img/logos/firefox/logo.fedb52c912d6.svg'
    }
  ]
  return (
    <>
      {is ? (
        children
      ) : (
        <div className="flex flex-col justify-center items-center gap-4 w-full h-full">
          <h1 className="text-4xl dark:text-white">
            Upps, su navegador no soporta Google Meet Clone
          </h1>
          <p>Navegadores soportados</p>
          <div className="flex gap-4">
            {browsers.map((x, i) => (
              <a
                href={x.url}
                target="_blank"
                key={`support-browser-${i}`}
                rel="noreferrer"
              >
                <img src={x.image} alt={x.image} className="w-12 h-12" />
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
