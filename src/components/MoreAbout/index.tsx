import { ReactNode } from "react";
import styles from "./moreabout.module.css"


interface MoreAboutProps {
    gameName: ReactNode,
    gameArt: ReactNode | any,
    gameDesc?: ReactNode
    gameInfo: () => void;
}

const MoreAbout: React.FC<MoreAboutProps> = ({ gameName, gameArt, gameDesc, gameInfo }) => {

    return (
        <div className={styles.blurBackground} id="aboutWindow">
            <div className={styles.moreAbout}>
                <div className={styles.gameInfoL}>
                    <h2> { gameName } </h2>
                    <img src={gameArt}/>
                </div>
                <div className={styles.gameInfoR}>
                    <h3>Sobre o jogo: </h3>
                    <p>
                        { gameDesc }
                    </p>
                    <button onClick={gameInfo}>Sair</button>
                </div>
            </div>
        </div>
    )
}

export default MoreAbout;