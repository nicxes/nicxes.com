import Head from 'next/head'

function Page ({ title, description, children }) {
  return (
    <div>
      <Head>
        <title>{title || 'Nicxes'}</title>

        <meta name="description" content={description || 'Nicxes'} />
        <meta name="keywords" content="Nicxes"/>
        <meta name="author" content="@Nicxes"/>
        
        <meta name="theme-color" content="#000000"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        
        <link href="https://sf.abarba.me/font.css" rel="stylesheet"/>
      </Head>

      {children}

      <style global jsx>{`
        body {
          color: #999;
          font-family: -apple-system, BlinkMacSystemFont, "SF Text", sans-serif;

          background: #fff;
          margin: 0;
        }
        h1, h2, h3, h4, h5, h6 {
          color: #222;
          font-family: -apple-system, BlinkMacSystemFont, "SF Display", sans-serif;

          margin: 0 0 10px 0;
        }
        .container {
          max-width: 900px;
          margin: 0 auto;

          padding: 0 20px;
        }
        .container-fluid {
          max-width: 90%;
          margin: 0 auto;

          padding: 0 20px;
        }
      `}</style>
    </div>
  )
}

export default Page