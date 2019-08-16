import { MediaQuery } from 'react-responsive'

import Score from './score'

export default function Table({ animes, search }) {
  return (
    <>
      <table className="zi-table">
        <thead>
          <tr>
            <MediaQuery minDeviceWidth={990}>
              <th></th>
              <th>Type</th>
            </MediaQuery>
            <th>Name</th>
            <th>Progress</th>
            <th>Score</th>
          </tr>
        </thead>

        <tbody>
          {animes.filter(anime =>
            anime.title.toLowerCase().includes(search.toLowerCase())
            ).map(anime => 
            <tr key={anime.mal_id}>

              <MediaQuery minDeviceWidth={990}>
                <td><img src={anime.image_url} className="zi-avatar square"/></td>
                <td><span className="zi-comment">{anime.type}</span></td>
              </MediaQuery>

              <td><a href={anime.url} target="_blank">{anime.title}</a></td>
              <td>
                {
                  anime.watching_status == 1 ? <span className="zi-tag">Currently Watching</span> :
                  anime.watching_status == 2 ? <span className="zi-tag success">Completed</span> :
                  anime.watching_status == 3 ? <span className="zi-tag warning">On Hold</span> :
                  anime.watching_status == 4 ? <span className="zi-tag warning">Dropped</span> :
                  anime.watching_status == 6 ? <span className="zi-tag">Plan to Watch</span> :
                  <span className="zi-tag danger">Error</span>
                }
              </td>
              
              <td className="zi-rate">
                <Score score={anime.score}/>
              </td>

            </tr>
          )}
        </tbody>
      </table>

      <style jsx>{`
        table {
          overflow: auto;
          white-space: nowrap;
        }
      `}</style>
    </>
  )
}