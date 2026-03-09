import Jumbotron from "./Jumbotron"

function MainHeader() {

    const navLinks = [
        { id: 1, label: "CHARACTERS", href: "#" },
        { id: 2, label: "COMICS", href: "#" },
        { id: 3, label: "MOVIES", href: "#" },
        { id: 4, label: "TV", href: "#" },
        { id: 5, label: "GAMES", href: "#" },
        { id: 6, label: "COLLECTIBLES", href: "#" },
        { id: 7, label: "VIDEOS", href: "#" },
        { id: 8, label: "FANS", href: "#" },
        { id: 9, label: "NEWS", href: "#" },
        { id: 10, label: "SHOP", href: "#" }
    ];

    function NavbarLinkRender() {
        return navLinks.map((link) => (
            <li key={link.id}><a className="link-nav" href={link.href}>{link.label}</a></li>
        ))
    }

    return (
        <>
            <header>
                <nav className="header-nav">
                    <figure className="logo-nav">
                        <img src="/dc-logo.png" alt="logo" />
                    </figure>
                    <ul className="list-nav">
                        {NavbarLinkRender(navLinks)}
                    </ul>
                </nav>

            </header>
            <Jumbotron />
        </>
    )
}

export default MainHeader