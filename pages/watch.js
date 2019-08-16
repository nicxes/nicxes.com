import fetch from 'isomorphic-unfetch'

import Page from '../components/page'
import Logo from '../components/logo'
import Stars from '../components/zeit/stars'

export default class Watch extends React.Component {
  static async getInitialProps () {
    const res = await fetch('https://api.jikan.moe/v3/user/nicxes/animelist/')
    const json = await res.json()
    
    return {
      animes: json.anime
    }
  }
  
  render() {
    return (
      <>
        <Page title="Nicxes - Watchlist">
          <main className="zi-main">
            <div className="zi-layout">

              <header>
                <div className="left">
                  <div className="zi-avatar huge square">
                    <Logo/>
                  </div>
                  <h1>Watchlist</h1>
                  <p className="zi-subheading">Using Jikan a Unofficial MyAnimeList API.</p>
                </div>

                <div className="right">
                  <input className="zi-input big search" placeholder="Search anime" spellCheck="false"/>
                  <p className="zi-comment">Showing {this.props.animes.length} results from Nicxes</p>
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
                  {this.props.animes.map(anime => 
                    <tr key={anime.mal_id}>
                      <td>
                        <img src={anime.image_url} className="zi-avatar square"/>
                      </td>
                      <td>{anime.type}</td>
                      <td>{anime.title}</td>
                      <td>
                        {
                          anime.watching_status == 2 ? <span>Completed</span> :
                          anime.watching_status == 3 ? <span>On Hold</span> :
                          anime.watching_status == 6 ? <span>Plan to Watch</span> :
                          <span>Error</span>
                        }
                      </td>
                      <td className="zi-rate">
                        <Stars score={anime.score}/>
                      </td>
                    </tr>
                  )}
                </tbody>

              </table>

            </div>
          </main>
        </Page>

        <style jsx>{`
          header {
            display: grid;
            grid-template-columns: 3fr 1fr;
            align-items: center;
            padding: 60px 0 40px 0;
          }
          .zi-layout {
            display: flex;
            flex-direction: column;


            max-width: 90%;
            width: auto;
            min-width: 0;
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