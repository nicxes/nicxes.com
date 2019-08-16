import fetch from 'isomorphic-unfetch'

import Page from '../components/page'
import Logo from '../components/logo'

import Anime from '../components/anime'

export default class Watch extends React.Component {
  constructor() {
    super()

    this.state = {
      animes: []
    }
  }
  componentDidMount() {
    fetch('https://api.jikan.moe/v3/user/nicxes/animelist/')
      .then( r => r.json() )
      .then( data => {
        console.log(data)
        this.setState({animes: data.anime})
      })
      .catch( err => {
        console.log(err)
      })
  }
  render() {
    return (
      <>
        <Page title="Nicxes - Watchlist">
          <main className="zi-main zi-layout">

            <header>
              <div>
                <div className="zi-avatar huge square">
                  <Logo/>
                </div>
                <h1 className="name">Watchlist</h1>
                <p className="description zi-subheading">Using Jikan a Unofficial MyAnimeList API.</p>
              </div>

              <div>
                <input className="zi-input big search" placeholder="Search anime" spellCheck="false"/>
                <span className="zi-comment results">Showing {this.state.animes.length} results from Nicxes</span>
              </div>
            </header>

            <table className="zi-table">
              <thead>
                <tr>
                  <th className="picture"></th>
                  <th>Type</th>

                  <th>Name</th>
                  <th>Progress</th>
                  <th>Score</th>
                </tr>
              </thead>

              <tbody>
                <Anime animes={this.state.animes}/>
              </tbody>
            </table>

          </main>
        </Page>

        <style jsx>{`
          header {
            display: grid;
            grid-template-columns: 2fr 1fr;
            align-items: center;
            padding: 60px 0 30px 0;
          }
          header .name {margin: 20px 0 0 0;}
          header .description {margin: 0 0 20px 0;}

          @media only screen and (max-width: 425px) {
            header {
              grid-template-columns: 1fr;
              text-align: center;
            }
            .picture {display: none;}
          }

          table {
            overflow: auto;
            white-space: nowrap;
          }

          .zi-layout {
            display: flex;
            flex-direction: column;

            width: auto;
            min-width: 0;
            max-width: 90%;
          }
          .search {
            width: 100%;
            margin: 4px 0;
          }
        `}</style>
      </>
    )
  }
}