import Link from 'next/link'

import Page from '../components/page'
import Navbar from '../components/navbar'
import Aside from '../components/aside'

export default function Exp() {
  return (
    <>
      <Navbar/>

      <Page title="Nicxes — Homepage">
        <main className="container-fluid">

          <section>
            <div>
              <span className="icon">💼</span>
              <h1 className="mb-4">Experience</h1>

              <h4 className="mb-1">2017 - 2018</h4>
              <h2 className="mb-1">UI Developer at Boopix</h2>
              <p className="mb-2">My primary responsibility in the project was developed and maintained the UI from Zeplin to HTML/SASS using Bootstrap v3 and Gitlab for version control making reusable assets and components for future updates if necessary. My top priority are mobile-first, accessibility and user experience.</p>
            
              <ul className="media unstyled">
                <li><img src="https://carbon-media.accelerator.net/0000000i0w8/6QDxZvEOZPLgeaD6FjSVy3;1326x800.webp"/></li>
                <li><img src="https://carbon-media.accelerator.net/0000000i0w8/lHEJ24Eyg4rbKFpE6JK7dB;1280x773.webp"/></li>
                <li><img src="https://carbon-media.accelerator.net/0000000i0w8/1eGJ9juajJAcuR5LLKBLXY;1194x800.webp"/></li>
                <li><img src="https://carbon-media.accelerator.net/0000000i0w8/jp1NLKBijMyfAVEVTWOUTp;990x800.webp"/></li>
                <li><img src="https://carbon-media.accelerator.net/0000000i0w8/0ob69YMQlbCb2PFSNulmGQ;923x800/lossless.webp"/></li>
                <li><img src="https://carbon-media.accelerator.net/0000000i0w8/0ob69YMQlbCb2PFSNulmGQ;923x800/lossless.webp"/></li>
                <li><img src="https://carbon-media.accelerator.net/0000000i0w8/2HyxAppLoCRbOxtG8cTc61;888x800/lossless.webp"/></li>
                <li><img src="https://carbon-media.accelerator.net/0000000i0w8/klU4n3ADKK8e5TuFu8vTAI;1280x698.webp"/></li>
              </ul>
            </div>
          
            <Aside/>
          </section>

          <hr/>

        </main>
      </Page>

      <style jsx>{`
        section {
          display: grid;
          grid-template-columns: 2fr 1fr;
          column-gap: 40px;
        }
        @media only screen and (max-width: 768px) {
          section {grid-template-columns: 1fr;}
        }
        section .icon {
          font-size: 42px;
          display: block;
          margin: 20px 0;
        }
        p {
          color: #333;
          font-weight: 400;
          line-height: 25px;
        }
        .media {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          column-gap: 20px;
        }
        .media li:first-child {grid-column: 1 / -1;}
        .media li {cursor: zoom-in;}
        .media li img {
          border: 1px solid #eee;
          width: 100%;
        }
      `}</style>
    </>
  )
}