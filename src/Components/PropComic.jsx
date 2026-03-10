export default function PropComic(props) {

    const { id, thumb, title, series } = props.comic

    return (
        <a className="card" href="#">
            <img src={thumb} alt={title} />
            <div className="card-title">
                {series}
            </div>
        </a>
    )
}