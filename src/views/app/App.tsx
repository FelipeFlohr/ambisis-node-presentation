import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router"

export default function App() {
    const location = useLocation()
    const navigation = useNavigate()

    useEffect(() => {
        if (location.pathname === "/") {
            navigation("/1")
        } else {
            try {
                const parsedLocation = parseInt(location.pathname.replace("/", ""))
                if (isNaN(parsedLocation)) {
                    navigation("/1")
                } else {
                    navigation(`/${parsedLocation}`)
                }
            } catch {
                navigation("/1")
            }
        }
    }, [])

    return (
        <></>
    )
}