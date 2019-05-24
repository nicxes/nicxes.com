import Head from 'next/head'

function HelloWorld() {
  return (
    <div>

      <Head>
        <title>Nicolás Miranda</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className="hello">
        <img src="../static/logo.svg"/>
      </main>

      <style global jsx>{`
        body {
          background: black;
          margin: 0;
        }
        .hello {
          display: flex;
          justify-content: center;
          align-items: center;

          height: 100vh;
        }
      `}</style>

    </div>
  )
}

export default HelloWorld;