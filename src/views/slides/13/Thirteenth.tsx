import CenterTitleSlide from "../../../components/slide/CenterTitleSlide";
import { Unity, useUnityContext } from "react-unity-webgl";
import path from "path";

export default function Thirteenth() {
    const { unityProvider } = useUnityContext({
        loaderUrl: path.resolve("src/assets/game/Build/BuildFPS.loader.js"),
        dataUrl: path.resolve("src/assets/game/Build/BuildFPS.data.gz"),
        codeUrl: path.resolve("src/assets/game/Build/BuildFPS.wasm.gz"),
        frameworkUrl: path.resolve("src/assets/game/Build/BuildFPS.framework.js.gz")
    })
    return (
        <CenterTitleSlide title="WebAssembly">
            <Unity unityProvider={unityProvider} style={{
                width: "800px",
                height: "600px"
            }} />
        </CenterTitleSlide>
    )
}