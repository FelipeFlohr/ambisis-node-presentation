export default function CenterTitleSlide(props: CenterTitleSlideProps) {
    return (
        <div className="slide">
            <h1 className="relative-h1 slide-center-title">
                { props.title }
            </h1>
            { props.children }
        </div>
    )
}

type CenterTitleSlideProps = {
    title: string
    children?: any
}