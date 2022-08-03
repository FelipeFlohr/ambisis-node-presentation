export default function ImageBackground(props: ImageBackgroundProps) {
    return (
        <div style={{ backgroundColor: props.hexBackground ?? "#000" }} className="w-screen h-screen flex items-center justify-center">
            <div className="w-screen h-screen flex items-center justify-center">
                <img className="max-h-full" src={props.image} />
            </div>
        </div>
    )
}

type ImageBackgroundProps = {
    image: string
    /**
     * @example #323232
     */
    hexBackground?: string
}