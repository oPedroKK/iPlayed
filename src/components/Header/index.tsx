import styles from "./header.module.css"

function Header() {

    let dropdown_active = document.getElementById("dropdown_active") as HTMLElement;
    let dropdown_menu = document.getElementById("dropdown_menu") as HTMLElement;

    //Para adicionar as classes tenho que ligar o Styles antes
    if (dropdown_active && dropdown_menu) {
        const showMenu = () => dropdown_menu.classList.add(styles.visible);
        const hideMenu = () => dropdown_menu.classList.remove(styles.visible);
    
        dropdown_menu.addEventListener('mouseover', showMenu);
        dropdown_active.addEventListener('click', showMenu);
        dropdown_menu.addEventListener('mouseout', hideMenu);

    }

    return (
        <div className={styles.header}>
            <a href="/">
                <div className={styles.headerTitle}>    
                    <img src="./vite.svg"/>
                    <h1>iPlayed</h1>
                </div>
            </a>
            <nav className={styles.headerNav}>
                <a href="#Todos">Novos jogos</a>
                <a>Na lista</a>
                <a id="dropdown_active" className={styles.dropdown_active}>Configurações</a>
                <div id="dropdown_menu" className={styles.dropdown}>
                    <a>Perfil</a>
                    <a>Metas</a>
                    <a href="/">Reiniciar site</a>
                </div>
            </nav>
        </div>
    )
}

export default Header;