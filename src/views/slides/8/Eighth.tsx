import CenterTitleSlide from "../../../components/slide/CenterTitleSlide";

export default function Eighth() {
    const iframeText = "<iframe />"

    return (
        <CenterTitleSlide title="O mundo antes do JavaScript">
            <ul className="relative-text list-disc pl-9 my-3">
                <li>1990 - 1996: páginas estáticas renderizadas no servidor</li>
                <li>1996: introdução do <i>{iframeText}</i></li>
            </ul>
            <iframe className="h-full mb-3" src="https://app.ambisis.com.br/login/" frameBorder="0"></iframe>
        </CenterTitleSlide>
    )
}