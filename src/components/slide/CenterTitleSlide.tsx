import React from "react"

export default function CenterTitleSlide(props: CenterTitleSlideProps) {
    return (
        <div className="slide">
            <h1 onClick={props.onClick} className={`relative-h1 slide-center-title ${props.onClick ? "hover:cursor-pointer" : "hover:cursor-default"}`}>
                { props.title }
            </h1>
            { props.children }
        </div>
    )
}

type CenterTitleSlideProps = {
    title: string
    children?: any
    onClick?: (e: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => void
}