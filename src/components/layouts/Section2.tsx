import { forwardRef, useContext, useImperativeHandle, useRef } from "react"
import { NavContext } from "../../contexts/NavContextProvider"

export type sec1Handle = {
    refHandler: () => void
}

const Section2 = forwardRef(() => {
    const { secRef } = useContext(NavContext)
    const sectionRef = useRef<HTMLDivElement>(null)

    useImperativeHandle(secRef[1], (): sec1Handle => ({
        refHandler() {
            return sectionRef.current.offsetTop
        }
    }))


    return (
        <div ref={sectionRef} className="bg-gray-800">
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
    )
})

export default Section2