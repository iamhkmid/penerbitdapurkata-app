import { forwardRef, MutableRefObject, useContext, useImperativeHandle, useRef } from "react"
import { NavContext } from "../../contexts/NavContextProvider"
import { getSectionEl } from "./getSectionEl"


const Section3 = forwardRef(() => {
    const { secRef } = useContext(NavContext)
    const sectionRef = useRef<HTMLDivElement>(null)

    useImperativeHandle(secRef[2], () => getSectionEl(sectionRef))


    return (
        <div ref={sectionRef} className="bg-red-600">
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
    )
})

export default Section3