import { ReactNode } from "react";
import styles from "./groupTitle.module.css"

interface groupProps {
    groupTitle: ReactNode;
    groupImage?: ReactNode | any;
}

const groupTitle: React.FC<groupProps> = ({ groupTitle, groupImage }) => {

    return (
        <div className={styles.groupContainer}>
            <div className={styles.groupTitle}>
                <img src={ groupImage }/>
                <h1>{ groupTitle }</h1>
            </div>
        </div>
    )
}

export default groupTitle;