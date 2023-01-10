
export const GifItem = ( {title, url} ) => {
  return (
    <div className="card">
        <img src={ url } alt={ title? title : 'Sin título' } />
        <p>{ title }</p>
    </div>
  )
}
