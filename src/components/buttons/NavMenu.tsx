import { useContext, useEffect } from "react"
import { NavContext } from "../../contexts/NavContextProvider"
import { useWindowScroll } from "react-use"

const NavMenu = ({ addClass }) => {
    const { navDatas, secRef, changeNavBtn, navBtn } = useContext(NavContext)
    const { y: pageYOffset } = useWindowScroll()
    const btnHandler = (value) => {
        navDatas.forEach((data, index) => {
            if (value === index) {
                const position = secRef[value].current.refHandler()
                window.scrollTo({ top: position, behavior: "smooth" })
            }
        })
    }

    useEffect(() => {
        if (pageYOffset < 600) {
            changeNavBtn(0)
        } else if (pageYOffset >= 400) {
            changeNavBtn(1)
        }
    }, [pageYOffset])

    const menu = navDatas.map((data, index) => <a onClick={() => btnHandler(index)} id={`#nav${index}`} key={index}
        className={`${addClass} ${navBtn == index ? "bg-purple-600 text-white" : "text-gray-800"} hover:bg-purple-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer `}>{data}</a>
    )
    return (
        <>
            {menu}
        </>
    )
}

export default NavMenu
