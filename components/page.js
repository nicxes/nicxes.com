import Head from 'next/head'

import '../static/zeit-ui.css'

export default function Page ({ title, description, children }) {
  return (
    <div>
      <Head>
        <title>{title || 'Nicxes'}</title>

        <meta name="description" content={description || 'UI Developer — from Buenos Aires, Argentina. Got more questions? Email me at hello@nicxes.com'} />
        <meta name="keywords" content="Nicxes, nicxes, nxs, nico, nicxes.com, nxs.sh, nico.sh, nicxes.dev"/>
        <meta name="author" content="@Nicxes"/>
        
        <meta name="theme-color" content="#000000"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        <link rel="shortcut icon" type="image/png" href="/static/favicon.png"/>
      </Head>

      {children}

      <style global jsx>{`
        ul.unstyled {
          margin: 0;
          padding: 0;
        }
        ul.unstyled li::before {
          content: none;
        }
        
      `}</style>
    </div>
  )
}
