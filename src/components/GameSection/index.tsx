import { ReactNode } from "react";
import styles from "./gameSection.module.css"

interface sectionProps {
    children: ReactNode;
    idTag?: string;
}

const GameSection: React.FC<sectionProps> = ({ children, idTag = 'default' }) => {

    return (
        <div className={styles.gameSection} id={idTag}>
            { children }
        </div>
    )
}

export default GameSection;