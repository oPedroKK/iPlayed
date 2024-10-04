import styles from "./footer.module.css"

function Footer() {

    return (
        <div className={styles.footer}>
            <div>
                <h3>Página desenvolvida por Pedro Barboza ©</h3>
                <p>
                    Referências utilizadas no site: <br/>
                    <a href="https://www.xbox.com">www.xbox.com</a><br/>
                    <a href="https://www.playstation.com">www.playstation.com</a><br/>
                    <a href="https://www.steam.com">www.steam.com</a><br/>
                </p>
            </div>

            <div>
                <p>
                    Todo site foi desenvolvido com intuito de aprender a trabalhar
                    com Typescript e React.<br/>
                    Nenhuma fonte de lucro vem deste site e todas as imagens e conceitos são
                    meramente ilustrativos.<br/><br/>
                    <span>Tmj leks 😎👍.</span>
                </p>
            </div>
        </div>
    )
}

export default Footer;