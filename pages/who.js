import Link from 'next/link'

import Page from '../components/page'
import Navbar from '../components/navbar'

export default function Who() {
  return (
    <>
      <Navbar/>

      <Page title="Nicxes — Homepage">
        <main className="container-fluid">
          
          <header>
            <div>
              <span className="icon">🧐</span>
              <h1 className="mb-1">About me</h1>
              <p className="mb-4">I'm Nicolas Miranda, a UI developer from Buenos Aires, Argentina. I started learning to code and mod since I was a child out of sheer curiosity during my free time and it has fascinated me ever since. Difficult problems always seem to intrigue me into finding the perfect solutions. Also, I'm a big fan of Blizzard due to their amazing attention to details such as UI, music and lore; my most favorite genre is FPS. Currently, I'm looking for a job opportunity.</p>

              <h2>Skills</h2>
              <ul className="unstyled">
                <li>Web Development</li>
                <li>Web Deployment</li>
                <li>User Experience</li>
                <li>Mobile First</li>
              </ul>
            </div>
          
            <aside className="hidden-mobile hidden-tablet">
              <ul className="unstyled">
                <li><a href="https://linkedin.com/in/nicxesh" target="_blank">Linkedin</a></li>
                <li><a href="https://github.com/nicxes" target="_blank">Github</a></li>
                <li><a href="mailto:nicxesh@gmail.com" target="_blank">Email</a></li>
              </ul>
            </aside>
          </header>

          <hr/>

        </main>
      </Page>

      <style jsx>{`
        header {
          display: grid;
          grid-template-columns: 2fr 1fr;
          column-gap: 20px;
        }
        @media only screen and (max-width: 768px) {
          header {grid-template-columns: 1fr;}
        }
        header .icon {
          font-size: 42px;
          display: block;
          margin: 20px 0;
        }

        aside {
          display: flex;
          align-items: flex-end;
        }
        aside a {
          color: #999;
          font-size: 14px;
          font-weight: 400;
        }
        p {
          color: #333;
          font-weight: 400;
          line-height: 25px;
        }

      `}</style>
    </>
  )
}