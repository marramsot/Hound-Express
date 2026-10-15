function Header() {
    return (
    <header id="inicio">
        <section className="principal">
            <img src="/img/logo.png" alt="Logo Hound Express" id="logo"/>
            < img src="img/titulo.png" alt="styles" id="titulo" className="principal__título"/>
            <img src="/img/slogan.png" alt="Slogan Hound Express" id="slogan"/>
        </section>
         < section className="menu" id="menu">
            <nav className="menu__nav" id="menu_nav">
                <ul>
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#registro">Registro de Guías</a></li>
                    <li><a href="#estado-general">Estado General</a></li>
                    <li><a href="#lista-guias">Lista de Guías</a></li>
                </ul>
            </nav>
        </section>
    </header>)
}
export default Header;