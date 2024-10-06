import { ReactNode, useState } from "react";
import styles from "./gameCover.module.css"
import MoreAbout from "../MoreAbout";

interface gameProps {
    name: ReactNode;
    cover?: ReactNode | any;
    verifyWindow?: boolean;
}

const GameCover: React.FC<gameProps> = ({name, cover}) => {

    let [info, checkInfo] = useState(false)
    let element = document.getElementById("gameInfoWindow")

    const clickToInfo = () => {
        element?.classList.add(styles.gameInfoAble)
        checkInfo(true)
        console.log(checkInfo)
    }

    const clickToClose = () => {
        element?.classList.add(styles.gameInfoDisable)
        checkInfo(false)
        console.log(checkInfo)
    }
   
    return(
        <>
            {
                info && 
                <div id="gameInfoWindow">
                    <MoreAbout gameName={name} gameArt={cover} gameInfo={clickToClose}/> 
                </div>
            }

            <div className={styles.gameContainer} onClick={clickToInfo}>

                <div className={styles.gameCover}>
                    <img src={cover}/>
                </div>

                <h2>{name}</h2>

            </div>
        </>

    )
}

export default GameCover;