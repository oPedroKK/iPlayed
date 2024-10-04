import styles from "./gameListDisplay.module.css"
import gameList from "../../json/games.json"
import GameCover from "../GameCover";
import { ReactNode } from "react";

interface gameListProps {
    enableCategory?: ReactNode;
    category?: ReactNode;
    plataform?: ReactNode;
}

const GameListDisplay: React.FC<gameListProps> = ({ enableCategory = false, plataform = false, category }) => {

    let filteredList = enableCategory 
    ? gameList.filter((game) => game.category === category) 
    : gameList

    filteredList = enableCategory && plataform
    ? gameList.filter((game) => game.plataform === category)
    : filteredList;

    return (
        <div className={styles.gameListDisplay}>
            {
                filteredList.map((game) => <GameCover name={game.name} cover={game.cover} key={game.name}/>)
            }
        </div>
    )
}

export default GameListDisplay;