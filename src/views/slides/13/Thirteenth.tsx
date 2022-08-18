import CenterTitleSlide from "../../../components/slide/CenterTitleSlide";
import { Unity, useUnityContext } from "react-unity-webgl";
import path from "path";

export default function Thirteenth() {
    const { unityProvider } = useUnityContext({
        loaderUrl: path.resolve("src/assets/game/Build/BuildFPS.loader.js"),
        dataUrl: path.resolve("src/assets/game/Build/BuildFPS.data"),
        codeUrl: path.resolve("src/assets/game/Build/BuildFPS.wasm"),
        frameworkUrl: path.resolve("src/assets/game/Build/BuildFPS.framework.js")
    })
    return (
        <CenterTitleSlide title="WebAssembly">
            <div className="flex flex-col w-full h-full items-center justify-center">
                <Unity unityProvider={unityProvider} style={{
                    width: "640px",
                    height: "480px"
                }} />
            </div>
        </CenterTitleSlide>
    )
}