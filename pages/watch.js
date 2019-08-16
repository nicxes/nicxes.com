import fetch from 'isomorphic-unfetch'
import LazyLoad from 'react-lazyload'

import Page from '../components/page'
import Logo from '../components/logo'
import Search from '../components/search'
import Table from '../components/table'

export default class Watch extends React.Component {
  constructor() {
    super()

    this.state = {
      animes: [],
      search: ""
    }
  }
  componentDidMount() {
    fetch('https://api.jikan.moe/v3/user/nicxes/animelist/')
      .then( r => r.json() )
      .then( data => {
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

              <Search animes={this.state.animes} InputChange={text => this.setState({search: text})}/>
            </header>

            <LazyLoad height={800} once>
              <Table animes={this.state.animes} search={this.state.search}/>
            </LazyLoad>

          </main>
        </Page>

        <style jsx>{`
          .zi-layout {
            display: flex;
            flex-direction: column;

            width: auto;
            min-width: 0;
            max-width: 90%;
          }

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
        `}</style>
      </>
    )
  }
}