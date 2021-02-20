import { dataSection1 } from "./data/dataMain"

const Slides = ({ type }) => {
    let height: string, textSize: string, animate: string;
    if (type == "sm") {
        height = "h-7.5"
        textSize = "text-3xl leading-none"
        animate = "animate-text-slide-sm"
    } else if (type == "md") {
        height = "h-9"
        textSize = "text-4xl leading-none"
        animate = "animate-text-slide-md"
    } else {
        height = "h-14 m-0"
        textSize = "text-5xl"
        animate = "animate-text-slide-lg leading-none "
    }
    const slider = dataSection1.textSlides.map((textSlide, index) => (
        <div key={index} className={`font-bold font-roboto text-center box-border ${index == 0 ? animate : " "} ${height + " " + textSize}`}>
            {textSlide}
        </div>
    ))
    return (
        <div className={`slider overflow-hidden ${height}`}>
            {slider}
        </div>
    )
}

const TextSlider = () => {
    return (
        <>
            <div className="hidden lg:block">
                <Slides type="lg" />
            </div>
            <div className="hidden md:block lg:hidden">
                <Slides type="md" />
            </div>
            <div className="md:hidden">
                <Slides type="sm" />
            </div>
        </>
    )
}

export default TextSlider