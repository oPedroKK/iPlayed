import { ReactNode } from "react";
import styles from "./gameCover.module.css"

interface gameProps {
    name: ReactNode;
    cover?: ReactNode | any;
}

const GameCover: React.FC<gameProps> = ({name, cover}) => {
    return(
        <div className={styles.gameContainer}>
            <div className={styles.gameCover}>
                <img src={cover}/>
            </div>
            <h2>{name}</h2>
        </div>
    )
}

export default GameCover;