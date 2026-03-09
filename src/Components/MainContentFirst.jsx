import comics from "../assets/img/comics"

function MainContentFirst() {

    function RenderCard() {

        return comics.map((comic) => (
            <a key={comic.id} className="card" href="#">
                <figure>
                    <img src={comic.thumb} alt={comic.title} />
                </figure>
                <div className="card-title">
                    {comic.series.toLocaleUpperCase()}
                </div>
            </a>
        ))
    }

    return (
        <section className="main-first">
            <div className="container-main-first">
                <div className="badge">Current Series</div>
                {RenderCard(comics)}

            </div>

            <div className="button-container">
                <a className="button-main-first" href="#">Load More</a>

            </div>
        </section>
    )
}

export default MainContentFirst