import Page from '../components/page'

import Navbar from '../components/navbar'

function Home() {
  return (
    <>
      <Navbar/>
      <Page>
        <main className="main">

          <div className="container">
            <h1>History</h1>
            <p><span className="date">06/2019:</span> <a href="https://aerolab.now.sh">Coding Challenge</a> — Aerolab's Coding Challenge using anything I want.</p>
            <p><span className="date">12/2018:</span> <a href="https://blackwatch.now.sh">Blackwatch</a> — A self-hosted personal bot for Discord, friendly design and very simple lightweight bot.</p>
            <p><span className="date">05/2018:</span> <a href="https://boopix.com">Boopix</a> — A photo marketplace that allows users to print his own photos.</p>
          </div>

        </main>
      </Page>

      <style jsx>{`
        .main {
          height: 100vh;
          overflow: hidden;

          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .main p {
          font-family: Monospace;
          line-height: 20px;
          margin: 0 0 5px 0;
        }
        .main p a {
          color: #fff;
          text-decoration: none;
          border-bottom: 1px solid #333;
        }
        .main p .date {
          color: #845dde;
        }
      `}</style>
    </>
  )
}

export default Home