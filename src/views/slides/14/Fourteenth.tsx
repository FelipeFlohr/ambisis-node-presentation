import CenterTitleSlide from "../../../components/slide/CenterTitleSlide";
import { Unity, useUnityContext } from "react-unity-webgl";
import path from "path";
import { useRef } from "react";

export default function Fourteenth() {
    const { unityProvider } = useUnityContext({
        loaderUrl: path.resolve("src/assets/game/Build/BuildFPS.loader.js"),
        dataUrl: path.resolve("src/assets/game/Build/BuildFPS.data"),
        codeUrl: path.resolve("src/assets/game/Build/BuildFPS.wasm"),
        frameworkUrl: path.resolve("src/assets/game/Build/BuildFPS.framework.js")
    })

    const unityCanvas = useRef<HTMLCanvasElement>(null);
    const closeCanvas = () => {
        unityCanvas.current?.remove();
    }

    return (
        <CenterTitleSlide title="WebAssembly" onClick={closeCanvas}>
            <div className="flex flex-col w-full h-full items-center justify-center">
                <Unity unityProvider={unityProvider} style={{
                    width: "640px",
                    height: "480px"
                }} ref={unityCanvas} />
            </div>
        </CenterTitleSlide>
    )
}