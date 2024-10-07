import styles from "./gameListDisplay.module.css"

import {fetchInfos, Game} from "../../hooks/fetchInfos"

import GameCover from "../GameCover";
import { ReactNode, useEffect, useState } from "react";

interface gameListProps {
    enableCategory?: ReactNode;
    category?: ReactNode;
    plataform?: ReactNode;
}

const GameListDisplay: React.FC<gameListProps> = ({ enableCategory = false, plataform = false, category }) => {
    const [games, setGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadInfo = async () => {
            setLoading(true);
            try {
                const gamesData = await fetchInfos();
                setGames(gamesData);
            } catch (error) {
                console.log("Erro ao carregar os dados da dataBase", error);
            } finally {
                setLoading(false);
            }
        };
        loadInfo();
    }, []);
    

    let filteredList = enableCategory 
    ? games.filter((game) => game.category === category) 
    : games

    filteredList = enableCategory && plataform
    ? games.filter((game) => game.plataform === category)
    : filteredList;


    if(loading) return <p>Carregando...</p>

    console.log(filteredList)
    return (
        <div className={styles.gameListDisplay}>
            {
                filteredList.map((game) => <GameCover name={game.name} cover={game.coverId} desc={game.description} key={game.id}/>)
            }
        </div>
    )
}

export default GameListDisplay;