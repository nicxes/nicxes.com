import fetch from 'isomorphic-unfetch'

import Page from '../components/page'
import Logo from '../components/logo'

import Stars from '../components/zeit/stars'

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
                <p className="zi-comment results">Showing {this.state.animes.length} results from Nicxes</p>
              </div>
            </header>

            <table className="zi-table">

                <thead>
                  <tr>
                    <th></th>
                    <th>Type</th>

                    <th>Name</th>
                    <th>Progress</th>
                    <th>Score</th>
                  </tr>
                </thead>

                <tbody>
                  {this.state.animes.map(anime => 
                    <tr key={anime.mal_id}>
                      <td>
                        <img src={anime.image_url} className="zi-avatar square"/>
                      </td>
                      <td>{anime.type}</td>
                      <td>{anime.title}</td>
                      <td>
                        {
                          anime.watching_status == 2 ? <span className="zi-tag success">Completed</span> :
                          anime.watching_status == 3 ? <span className="zi-tag warning">On Hold</span> :
                          anime.watching_status == 6 ? <span className="zi-tag">Plan to Watch</span> :
                          <span className="zi-tag danger">Error</span>
                        }
                      </td>
                      <td className="zi-rate">
                        <Stars score={anime.score}/>
                      </td>
                    </tr>
                  )}
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
          .results {margin: 0;}
        `}</style>
      </>
    )
  }
}