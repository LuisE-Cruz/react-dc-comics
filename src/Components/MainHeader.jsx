
function MainHeader() {
    return (
        <header>
            <nav className="header-nav">
                <figure className="logo-nav">
                    <img src="/dc-logo.png" alt="logo" />
                </figure>
                <ul className="list-nav">
                    <li><a className="link-nav" href="#">Characters</a></li>
                    <li><a className="link-nav" href="#">Comics</a></li>
                    <li><a className="link-nav" href="#">Movies</a></li>
                    <li><a className="link-nav" href="#">TV</a></li>
                    <li><a className="link-nav" href="#">Games</a></li>
                    <li><a className="link-nav" href="#">Collectibles</a></li>
                    <li><a className="link-nav" href="#">Videos</a></li>
                    <li><a className="link-nav" href="#">Fans</a></li>
                    <li><a className="link-nav" href="#">News</a></li>
                    <li><a className="link-nav" href="#">Shop</a></li>
                </ul>
            </nav>

        </header>
    )
}

export default MainHeader