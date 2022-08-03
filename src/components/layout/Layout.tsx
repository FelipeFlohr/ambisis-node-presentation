import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import VideoCamera from "../../assets/icons/VideoCamera"

export default function Layout(props: LayoutProps) {
    const navigation = useNavigate()
    const [currentLocation, setCurrentLocation] = useState<number>(1)
    const allPaths = (props.children.props.children as React.ReactElement[]).map(r => r.props.path as string)

    const [goValue, setGoValue] = useState<number>(1)
    const [showGoTo, setShowGoTo] = useState<boolean>(false)
    const [isFullscreen, setFullscreen] = useState<boolean>(false)

    const handleGoValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const parsedGoValue = parseInt(e.target.value)

        if (isNaN(parsedGoValue) || parsedGoValue < 1) {
            setGoValue(1)
        } else {
            setGoValue(parsedGoValue)
        }
    }

    const handleGoButton = () => {
        if (allPaths.includes(`/${goValue}`)) {
            navigation(`${goValue}`)
            setCurrentLocation(goValue)
        }
    }

    const goToPrevious = () => {
        if (currentLocation - 1 > 0) {
            setCurrentLocation(currentLocation - 1)
            navigation(`/${currentLocation - 1}`)
        }
    }

    const goToNext = () => {
        if (allPaths.includes(`/${currentLocation + 1}`)) {
            setCurrentLocation(currentLocation + 1)
            navigation(`/${currentLocation + 1}`)
        }
    }

    const handleFullScreenClick = async () => {
        if (isFullscreen) {
            await document.exitFullscreen()
            setFullscreen(false)
        } else {
            await document.querySelector("html")?.requestFullscreen()
            setFullscreen(true)
        }
    }

    useEffect(() => {
        window.onkeydown = e => {
            if (e.key === "ArrowLeft") {
                goToPrevious()
            } else if (e.key === "ArrowRight") {
                goToNext()
            }
        }
    }, [currentLocation])

    return (
        <div className="w-full h-full">
            <nav className="absolute left-2">
                <span onClick={() => setShowGoTo(!showGoTo)} className="text-3xl mix-blend-difference text-white opacity-50 hover:opacity-100 transition-all hover:cursor-pointer">
                    {currentLocation}
                </span>
                <div className={`bg-slate-900 w-52 h-24 rounded-xl mt-2 p-1 shadow-2xl ${showGoTo ? "visible" : "hidden"}`}>
                    <h1 className="text-white">Go to:</h1>
                    <div className="flex mt-2">
                        <input onChange={handleGoValue} className="w-40 mt-1 ml-1 text-black pl-2 rounded-md" type="number" value={goValue} />
                        <button onClick={handleGoButton} className="text-white ml-2">Go</button>
                    </div>
                </div>
            </nav>
            <div onClick={handleFullScreenClick} className="absolute right-2 text-3xl mix-blend-difference fill-white text-white opacity-50 hover:opacity-100 transition-all hover:cursor-pointer w-8 h-8 flex">
                <VideoCamera />
            </div>
            <main onClick={() => setShowGoTo(false)} className="w-full h-full" id="content">
                {props.children}
            </main>
        </div>
    )
}

interface LayoutProps {
    children: React.ReactElement
}
