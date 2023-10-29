import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h1>Ecommerce</h1>
            <section>
                <button>Mesas</button>
                <button>Sillas</button>
                <button>Lamparas</button>
            </section>
            <CartWidget />
        </nav>
    )
}

export default NavBar