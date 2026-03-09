function FooterStart() {

    const footerLinksComics = [
        { id: 1, label: "Characters", href: "#" },
        { id: 2, label: "Comics", href: "#" },
        { id: 3, label: "Movies", href: "#" },
        { id: 4, label: "TV", href: "#" },
        { id: 5, label: "Games", href: "#" },
        { id: 6, label: "Videos", href: "#" },
        { id: 7, label: "News", href: "#" }
    ];

    const footerLinksShop = [
        { id: 1, label: "Shop DC", href: "#" },
        { id: 2, label: "Shop DC Collectibles", href: "#" }
    ];

    const footerLinksDC = [
        { id: 1, label: "Terms Of Use", href: "#" },
        { id: 2, label: "Privacy policy (New)", href: "#" },
        { id: 3, label: "Ad Choices", href: "#" },
        { id: 4, label: "Advertising", href: "#" },
        { id: 5, label: "Jobs", href: "#" },
        { id: 6, label: "Subscriptions", href: "#" },
        { id: 7, label: "Talent Workshops", href: "#" },
        { id: 8, label: "CPSC Certificates", href: "#" },
        { id: 9, label: "Rating", href: "#" },
        { id: 10, label: "Shop Help", href: "#" },
        { id: 11, label: "Contact Us", href: "#" }
    ];

    const footerLinksSities = [
        { id: 1, label: "DC", href: "#" },
        { id: 2, label: "MAD Magazine", href: "#" },
        { id: 3, label: "DC Kids", href: "#" },
        { id: 4, label: "DC Universe", href: "#" },
        { id: 5, label: "DC Power Visa", href: "#" }
    ];

    function NavBarLinkRender(links) {
        return links.map((link) => (
            <li key={link.id}><a href={link.href}>{link.label}</a></li>
        ))
    }

    return (
        <section className="bg-footer-start">
            <div className="container-footer-start">
                <div className="left-footer-start">
                    <div className="list-footer">
                        <h2>DC COMICS</h2>
                        <ul>
                            {NavBarLinkRender(footerLinksComics)}
                        </ul>
                        <h2>SHOP</h2>
                        <ul>
                            {NavBarLinkRender(footerLinksShop)}
                        </ul>
                    </div>
                    <div className="list-footer">
                        <h2>DC</h2>
                        <ul>
                            {NavBarLinkRender(footerLinksDC)}
                        </ul>
                    </div>
                    <div className="list-footer">
                        <h2>SITIES</h2>
                        <ul>
                            {NavBarLinkRender(footerLinksSities)}
                        </ul>
                    </div>
                </div>
                <div className="right-footer-start">
                    <img src="src/assets/img/dc-logo-bg.png" alt="Dc logo" />
                </div>
            </div>
        </section>
    )
}
export default FooterStart