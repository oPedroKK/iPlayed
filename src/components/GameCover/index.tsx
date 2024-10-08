import { ReactNode, useState } from "react";
import styles from "./gameCover.module.css"
import MoreAbout from "../MoreAbout";

interface gameProps {
    name: ReactNode;
    desc: ReactNode;
    buyLink: ReactNode;
    cover?: ReactNode | any;
    verifyWindow?: boolean;
}

const GameCover: React.FC<gameProps> = ({name, cover, desc, buyLink}) => {

    let [info, checkInfo] = useState(false)
    // let element = document.getElementById("gameInfoWindow")

    const clickToInfo = () => {
        checkInfo(true)
        
        // element?.classList.replace(styles.gameInfoWindow, styles.gameInfoAble)
        console.log('foi')
    }

    const clickToClose = () => {
        checkInfo(false)

        // element?.classList.add(styles.gameInfoDisable)
        console.log(checkInfo)
    }
   
    return(
        <>
            {
                info && 
                <div className={styles.gameInfoWindow} id="gameInfoWindow">
                    <MoreAbout gameName={name} gameArt={cover} gameDesc={desc} gameInfo={clickToClose} buyLink={buyLink}/> 
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