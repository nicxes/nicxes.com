import Head from 'next/head'

function Page ({ title, description, children }) {
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
        
        <link href="https://sf.abarba.me/font.css" rel="stylesheet"/>
      </Head>

      {children}

      <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
        }
        body {
          color: #999;
          font-family: -apple-system, BlinkMacSystemFont, "SF Text", sans-serif;

          background: #fff;
          margin: 0;
        }
        h1, h2, h3, h4, h5, h6 {
          color: #222;
          font-family: -apple-system, BlinkMacSystemFont, "SF Display", sans-serif;
        }
        a {
          color: #222;
          text-decoration: none;
        
          transition: 0.1s all ease-in;
        }
        .container {
          max-width: 420px;
          margin: 0 auto;

          padding: 0 20px;
        }
        .container-fluid {
          max-width: 90%;
          margin: 0 auto;

          padding: 0 20px;
        }
        ul.unstyled {
          padding: 0;
          margin: 0;
        }
        ul.unstyled li {
          list-style: none;
          margin: 8px 0;
        }
        p {
          margin-top: 0;
        }

        .mb-1 {margin-bottom: 10px !important;}
        .mb-2 {margin-bottom: 20px !important;}
        .mb-4 {margin-bottom: 40px !important;}

        hr {
          border: 1px solid rgba(55, 53, 47, 0.09);
          margin: 60px 0;
        }

        @media only screen and (max-width: 425px) {
          .hidden-mobile {display: none !important;}
        }
        @media only screen and (min-width: 426px) and (max-width: 768px) {
          .hidden-tablet {display: none !important;}
        }
        @media only screen and (min-width: 769px) {
          .hidden-desktop {display: none !important;}
        }
      `}</style>
    </div>
  )
}

export default Page
