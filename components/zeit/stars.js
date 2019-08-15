export default function Stars({ score }) {
  let final = score / 2
  let stars = []

  for (let i = 0; i < 5; i++) {
    if(final > 0) {
      stars.push(
        <i className="zi-rate-star zi-icon-star active"/>
      )
    } else {
      stars.push(
        <i className="zi-rate-star zi-icon-star-off"/>
      )
    }
    final--
  }

  return (
    <>
      {stars}
    </>
  )
}