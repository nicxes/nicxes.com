import Score from './score'

export default function Anime({ animes }) {
  return (
    <>
      {animes.map((anime, key) => 
        <tr key={anime.mal_id}>
          <td className="picture"><img src={anime.image_url} className="zi-avatar square"/></td>
          <td className="type"><span className="zi-comment">{anime.type}</span></td>
          <td className="title">{anime.title}</td>
          <td className="status">
            {
              anime.watching_status == 1 ? <span className="zi-tag">Currently Watching</span> :
              anime.watching_status == 2 ? <span className="zi-tag success">Completed</span> :
              anime.watching_status == 3 ? <span className="zi-tag warning">On Hold</span> :
              anime.watching_status == 4 ? <span className="zi-tag warning">Dropped</span> :
              anime.watching_status == 6 ? <span className="zi-tag">Plan to Watch</span> :
              <span className="zi-tag danger">Error</span>
            }
          </td>
          
          <td className="score zi-rate">
            <Score score={anime.score}/>
          </td>
        </tr>
      )}

      <style jsx>{`
        @media only screen and (max-width: 425px) {
          .type,
          .picture {display: none;}
        }
      `}</style>
    </>
  )
}