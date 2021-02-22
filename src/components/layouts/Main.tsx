import { useContext } from "react"
import { NavContext } from "../../contexts/NavContextProvider"
import Section1 from "./Section1"
import Section2 from "./Section2"
import Section3 from "./Section3"

const Main = () => {
    const { changeNavToggle } = useContext(NavContext)
    return (
        <main onClick={() => changeNavToggle(false)}>
            <Section1 />
            <Section2 />
            <Section3 />
        </main >
    )
}

export default Main