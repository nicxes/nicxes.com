export default function Search({ animes, InputChange }) {
  return (
    <>
      <div>
        <input onKeyUp={event => InputChange(event.target.value)} className="zi-input big search" type="search" placeholder="Search anime" spellCheck="false"/>
        <span className="zi-comment results">Showing {animes.length} results from Nicxes</span>
      </div>

      <style jsx>{`
        .search {
          width: 100%;
          margin: 4px 0;
        }
      `}</style>
    </>
  )
}