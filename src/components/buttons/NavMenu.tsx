import { useContext, useEffect } from "react"
import { NavContext } from "../../contexts/NavContextProvider"
import { useWindowScroll } from "react-use"

const NavMenu = ({ addClass }) => {
    const { navDatas, secRef, changeNavBtn, navBtn, changeNavToggle } = useContext(NavContext)
    const { y: pageYOffset } = useWindowScroll()

    const btnHandler = (value) => {
        navDatas.forEach((data, index) => {
            if (value === index) {
                const position: number = secRef[value].current.offsetTop
                window.scrollTo({ top: position - 50, behavior: "smooth" })
            }
        })
    }


    useEffect(() => {
        const position = navDatas.map((data, index) => {
            return secRef[index].current.offsetTop + secRef[index].current.offsetHeight - 50
        })
        if (pageYOffset < position[0]) {
            changeNavBtn(0)
        } else if (pageYOffset >= position[0] && pageYOffset < position[1]) {
            changeNavBtn(1)
        } else if (position[2] >= position[2]) {
            changeNavBtn(2)
        }

        changeNavToggle(false)
    }, [pageYOffset])

    const menu = navDatas.map((data, index) => (
        <a onClick={() => btnHandler(index)}
            id={`#nav${index}`}
            key={index}
            className={`${addClass} ${navBtn == index ? "bg-purple-600 text-white" : "text-gray-800"} 
        hover:bg-purple-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer hover:transition-opacity duration-500 ease-in-out
        `}>{data}</a>)
    )
    return (
        <>
            {menu}
        </>
    )
}

export default NavMenu
