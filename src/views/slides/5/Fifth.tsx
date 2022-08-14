import { useEffect, useState } from "react";
import express from "express";
import CenterTitleSlide from "../../../components/slide/CenterTitleSlide";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import $ from "jquery";
import sleep from "../../../utils/sleep";

export default function Fifth() {
    const [asyncStatus, setAsyncStatus] = useState("Esperando...")
    const [syncStatus, setSyncStatus] = useState("Esperando...")
    const [asyncButtonEnabled, setAsyncButtonEnabled] = useState(true)
    const [syncButtonEnabled, setSyncButtonEnabled] = useState(true)

    useEffect(() => {
        const app = express()
        app.get("/", async (req, res) => {
            await sleep(3000);
            res.json({ message: "Olá, mundo!" })
        })

        const server = app.listen(3000, () => {
            console.log("Servidor iniciado na porta 3000")
        })
        return () => {
            server.close()
        }
    }, [])

    const postAsync = () => {
        setAsyncButtonEnabled(false)
        $.ajax({
            url: "http://localhost:3000/",
            success: (res) => {
                setAsyncStatus(JSON.stringify(res))
            },
            async: true
        })
        setAsyncStatus("Obtendo...")
    }

    const postSync = () => {
        setSyncButtonEnabled(false)
        $.ajax({
            url: "http://localhost:3000/",
            success: (res) => {
                setAsyncStatus(JSON.stringify(res))
            },
            async: false
        })
        setSyncStatus("Obtendo...")
    }

    const asyncCode = `const app = express()
app.get("/", async (req, res) => {
    await sleep(3000);
    res.json({ message: "Olá, mundo!" })
})

$.ajax({
    url: "http://localhost:3000/",
    success: (res) => {
        setAsyncStatus(JSON.stringify(res))
    },
    async: true
})
setAsyncStatus("Obtendo...")
`

const syncCode = `const app = express()
app.get("/", async (req, res) => {
    await sleep(3000);
    res.json({ message: "Olá, mundo!" })
})

$.ajax({
    url: "http://localhost:3000/",
    success: (res) => {
        setAsyncStatus(JSON.stringify(res))
    },
    async: false
})
setSyncStatus("Obtendo...")
`

    return (
        <CenterTitleSlide title='"[...] Um único núcleo, não bloqueável, de programação assíncrona [...]"'>
            <ul className="relative-text list-disc pl-9 mt-3">
                <li>"Um único núcleo": Node <i>versus</i> o resto</li>
                <li>Worker Threads: processamento paralelo no Node.js</li>
            </ul>
            <div className="flex w-full h-full pt-16">
                <div className="flex w-1/2 flex-col mr-3">
                    <h3 className="relative-h3 w-full text-center">Assíncrono</h3>
                    <SyntaxHighlighter language="typescript" style={dark}>
                        {asyncCode}
                    </SyntaxHighlighter>
                    <span className="w-full text-center text-2xl">{asyncStatus}</span>
                    <div className="flex w-full items-center justify-center">
                        <button disabled={!asyncButtonEnabled} onClick={postAsync} className="bg-blue-400 mt-7 rounded-md hover:bg-blue-300 active:bg-blue-500 w-1/2 disabled:bg-gray-500">Fazer requisição assíncrona</button>
                    </div>
                </div>
                <div className="flex w-1/2 flex-col">
                    <h3 className="relative-h3 w-full text-center">Síncrono</h3>
                    <SyntaxHighlighter language="typescript" style={dark}>
                        {syncCode}
                    </SyntaxHighlighter>
                    <span className="w-full text-center text-2xl">{syncStatus}</span>
                    <div className="flex w-full items-center justify-center">
                        <button disabled={!syncButtonEnabled} onClick={postSync} className="bg-blue-400 mt-7 rounded-md hover:bg-blue-300 active:bg-blue-500 w-1/2 disabled:bg-gray-500">Fazer requisição síncrona</button>
                    </div>
                </div>
            </div>
        </CenterTitleSlide>
    )
}