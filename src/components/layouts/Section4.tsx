import { forwardRef, useContext, useImperativeHandle, useRef } from "react"
import { NavContext } from "../../contexts/NavContextProvider"
import { getSectionEl } from "./getSectionEl"

const Section4 = forwardRef(() => {
    const { secRef } = useContext(NavContext)
    const sectionRef = useRef<HTMLDivElement>(null)

    useImperativeHandle(secRef[3], () => getSectionEl(sectionRef))

    return (
        <div ref={sectionRef} className="bg-gradient-to-l from-gray-50 to-gray-200 h-screen flex flex-col place-content-center">
            <br /><br /><br /><br /><br /><br />
        </div>

    )
})

export default Section4