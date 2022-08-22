import CenterTitleSlide from "../../../components/slide/CenterTitleSlide";

export default function Second() {
    return (
        <CenterTitleSlide title="Conteúdo da apresentação:">
            <ol className="relative-text list-decimal pl-9 mt-3">
                <li>O que é o <i>Node.js</i>?</li>
                <li>O mundo antes do JavaScript</li>
                <li>Uma breve história do JavaScript</li>
                <li>TypeScript: JavaScript porém bom</li>
                <li>WebAssembly</li>
                <li>Node.js no Front-end: Vanilla <i>versus</i> React.js</li>
                <li>Node.js no Back-end: Express.js</li>
                <li>Web Scraping</li>
                <li>Desafio</li>
            </ol>
        </CenterTitleSlide>
    )
}