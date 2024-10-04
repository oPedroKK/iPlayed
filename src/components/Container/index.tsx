import React, { ReactNode } from "react";
import styles from "./container.module.css"

//Tenho que criar a interface e declarar as propriedades do React agora :|
interface ContainerProps {
    children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div className={styles.container}>
            { children }
        </div>
    )
}

export default Container;