import ImageBackground from "../../../components/imageBackground";
import fifth from "../../../assets/vectorslides/4.svg"
import { useEffect, useState } from "react";
import express from "express";

export default function Fifth() {
    const [showContent, setShowContent] = useState(false)

    useEffect(() => {
        const app = express()
        app.get("/", (req, res) => {
            res.json({ message: "Olá, mundo" })
        })

        const server = app.listen(3000, () => {
            console.log("Servidor iniciado na porta 3000")
            setShowContent(false)
        })
        return () => {
            server.close()
        }
    }, [])

    return showContent ? <ImageBackground image={fifth} hexBackground="#323232" /> : <></>
}