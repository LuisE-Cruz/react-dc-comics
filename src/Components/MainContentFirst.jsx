import comics from "../assets/img/comics"
import PropComic from "./PropComic"

function MainContentFirst() {

    function ComicCardRender() {
        return comics.map((gennaro) => (
            <PropComic
                key={gennaro.id}
                comic={gennaro}
            />
        ))
    }


    return (
        <section className="main-first">
            <div className="container-main-first">
                <div className="badge">Current Series</div>
                {ComicCardRender()}
            </div>

            <div className="button-container">
                <a className="button-main-first" href="#">Load More</a>

            </div>
        </section>
    )
}

export default MainContentFirst