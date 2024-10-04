import styles from "./selectionBar.module.css"

function SelectionBar() {
    return(
        <div className={styles.subbar}>
            <h2>Eae? Qual será a plataforma da vez?</h2>
            <nav>
                <a href="#Play">
                    <img src="./covers/Playstation.jpg"/> 
                    <p>Playstation</p> 
                </a>
                <a href="#Xbox">
                    <img src="./covers/Xbox.png"/> 
                    <p>Xbox</p> 
                </a>
                <a href="#Pc">
                    <img src="./covers/Steam.png"/> 
                    <p>PC</p> 
                </a>
            </nav>
        </div>
    );
}

export default SelectionBar;