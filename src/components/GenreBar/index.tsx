import styles from "./genrebar.module.css"

function GenreBar() {

    return(
        <div className={styles.genreBarSection}>
            <div className={styles.genreTitle}>
                <h1>Quer explorar baseado no seu estilo favorito?</h1>
                <h1>Escolha seu genero favorito e explore!</h1>
            </div>

            <nav className={styles.genreSelection}>
                <a href="#Rpg" className={styles.genrebar}>
                    <img src="./covers/Rpg.jpeg" /> 
                    <h3>RPGs</h3>
                </a>
                <a href="#Adv" className={styles.genrebar}>
                    <img src="./covers/Adv.jpg"/> 
                    <h3>Aventuras</h3>
                </a>
                <a href="#Zombie" className={styles.genrebar}>
                    <img src="./covers/Zombie.jpg"/> 
                    <h3>Pós-Apocalíptco</h3>
                </a>

            </nav>
        </div>
    );
}

export default GenreBar;