import styles from "./Second.module.css"

export default function Second() {
    return (
        <div className={styles.slide}>
            <h1 className={styles["relative-h1"]}>
                Conteúdo da apresentação:
            </h1>
            <ol className={`${styles["relative-text"]} list-decimal pl-9 mt-3`}>
                <li>O que é o <i>Node.js</i>?</li>
                <li>O mundo antes do JavaScript</li>
                <li>Uma breve história do JavaScript</li>
                <li>JavaScript do lado do servidor: LiveWire, Node, Deno & Bun</li>
                <li>Typescript: JavaScript porém bom</li>
                <li>WebAssembly</li>
                <li>Node.js no Front-end: React, Angular, Vue.js & Svelte</li>
                <li>Node.js no Back-end: Express.js</li>
                <li>Web Scraping</li>
                <li>Desafio</li>
            </ol>
        </div>
    )
}