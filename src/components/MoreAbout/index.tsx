import { ReactNode } from "react";
import styles from "./moreabout.module.css"


interface MoreAboutProps {
    gameName: ReactNode,
    gameArt: ReactNode | any,
    gameDesc?: ReactNode,
    buyLink?: ReactNode | any,
    gameInfo: () => void;
}

const MoreAbout: React.FC<MoreAboutProps> = ({ gameName, gameArt, gameDesc, gameInfo, buyLink }) => {

    return (
        <>
        
            <div className={styles.moreAbout}>
                <div className={styles.gameInfoL}>
                    <h2> { gameName } </h2>
                    <img src={gameArt}/>
                </div>

                <div className={styles.gameInfoR}>
                    <div>
                        <h3>Sobre o jogo: </h3>
                        <p>{ gameDesc }</p>
                    </div>

                    <div>
                        <h3>Link para comprar: </h3>
                        <a href={buyLink} target="_blank" className={styles.gameLink}> { buyLink } </a>
                    </div>

                    <button onClick={gameInfo}>Sair da janela</button>
                </div>
            </div>

            <div className={styles.blurBackground} id="aboutWindow" />
        
        </>

    )
}

export default MoreAbout;