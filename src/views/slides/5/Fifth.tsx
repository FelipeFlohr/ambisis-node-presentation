import ImageBackground from "../../../components/imageBackground";
import fifth from "../../../assets/vectorslides/4.svg"
import { useEffect } from "react";
import express from "express";

export default function Fifth() {
    useEffect(() => {
        const app = express()
        app.get("/", (req, res) => {
            res.json({ message: "Olá, mundo" })
        })

        const server = app.listen(3000, () => {
            console.log("Servidor iniciado na porta 3000")
        })
        return () => {
            server.close()
        }
    }, [])

    return (
        <ImageBackground image={fifth} hexBackground="#323232" />
    )
}