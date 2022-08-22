import SyntaxHighlighter from "react-syntax-highlighter";
import CenterTitleSlide from "../../../components/slide/CenterTitleSlide";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import path from "path";
import { useState } from "react";
import { getPrimes } from "../../../scripts/ts";

export default function Fifteenth() {

    const cCode = `int isPrime(int n) {
    for (int i = 2; i <= n/2; i++) {
        if (!(n%i)) {
            return 0;
        }
    }
    return 1;
}
int getPrimes() {
    int numPrimes = 0;
    for (int i = 2; i < 250001; i++) {
        numPrimes += isPrime(i);
    }
    return numPrimes;
}`

    const tsCode = `function isPrime(n: number) {
    for (let i = 2; i <= n/2; i++) {
        if (n % i === 0) {
            return 0;
        }
    }
    return 1;
}
export function getPrimes() {
    let numPrimes = 0;
    for (let i = 2; i < 250001; i++) {
        numPrimes += isPrime(i);
    }
    return numPrimes;
}`

    const [cStartDate, setCStartDate] = useState<string>("-");
    const [cFinalDate, setCFinalDate] = useState<string>("-");
    const [tsStartDate, setTsStartDate] = useState<string>("-");
    const [tsFinalDate, setTsFinalDate] = useState<string>("-");

    const loadWasm = async () => {
        // Loadar WASM
        const wasmMemory = new WebAssembly.Memory({
            initial: 256,
            maximum: 4096
        })
        const wasmTable = new WebAssembly.Table({
            initial: 1,
            maximum: 1,
            element: "anyfunc"
        })
        const wasmLibraryArg = {
            "__handle_stack_overflow": () => {},
            "emscripten_resize_heap": () => {},
            "__lock": () => {},
            "__unlock": () => {},
            "memory": wasmMemory,
            "table": wasmTable
        }
        const info = {
            'env': wasmLibraryArg,
            'wasi_snapshot_preview1': wasmLibraryArg,
        };

        const wasmPath = path.resolve("src/scripts/c/main.wasm")
        const response = await fetch(wasmPath);
        const bytes = await response.arrayBuffer();
        const wasmObj = await WebAssembly.instantiate(bytes, info)

        const wasmExports = wasmObj.instance.exports;

        const initialDate = new Date()
        setCStartDate(parseHours(initialDate));

        (wasmExports as any).getPrimes();

        const finalDate = new Date()
        setCFinalDate(parseHours(finalDate));
    }

    const loadTypescript = () => {
        const initialDate = new Date()
        setTsStartDate(parseHours(initialDate))

        getPrimes()

        const finalDate = new Date()
        setTsFinalDate(parseHours(finalDate))
    }

    const parseHours = (date: Date) => {
        const seconds = date.getSeconds()
        const minutes = date.getMinutes()
        const hours = date.getHours()

        const parsedHours = hours < 10 ? `0${hours}` : hours.toString()
        const parsedMinutes = minutes < 10 ? `0${minutes}` : minutes.toString()
        const parsedSeconds = seconds < 10 ? `0${seconds}` : seconds.toString()

        return `${parsedHours}:${parsedMinutes}:${parsedSeconds}`
    }

    return (
        <CenterTitleSlide title="WebAssembly - Comparações">
            <div className="w-full h-full flex mt-6">
                <div className="w-1/2">
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="relative-h2">C para WASM</h2>
                        <SyntaxHighlighter language="c" style={dark}>
                            {cCode}
                        </SyntaxHighlighter>
                        <button onClick={loadWasm} className="bg-blue-400 mt-7 rounded-md hover:bg-blue-300 active:bg-blue-500 w-1/2 disabled:bg-gray-500">Chamar WebAssembly</button>
                        <span>Começo: {cStartDate}</span>
                        <span>Fim: {cFinalDate}</span>
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="relative-h2">TypeScript</h2>
                        <SyntaxHighlighter language="c" style={dark}>
                            {tsCode}
                        </SyntaxHighlighter>
                        <button onClick={loadTypescript} className="bg-blue-400 mt-7 rounded-md hover:bg-blue-300 active:bg-blue-500 w-1/2 disabled:bg-gray-500">Chamar TypeScript</button>
                        <span>Começo: {tsStartDate}</span>
                        <span>Fim: {tsFinalDate}</span>
                    </div>
                </div>
            </div>
        </CenterTitleSlide>
    )
}