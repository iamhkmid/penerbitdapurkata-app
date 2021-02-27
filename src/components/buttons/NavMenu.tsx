import { useContext, useEffect } from "react"
import { NavContext } from "../../contexts/NavContextProvider"
import { useWindowScroll } from "react-use"

const NavMenu = () => {
    const { navs, secRef, changeNavBtn, navBtn, changeNavToggle } = useContext(NavContext)
    const { y: pageYOffset } = useWindowScroll()

    const btnHandler = (value) => {
        navs.forEach((nav, index) => {
            value === index && window.scrollTo({
                top: secRef[value].current.offsetTop - 50, behavior: "smooth"
            })
        })
    }

    useEffect(() => {
        navs.forEach((nav, index) => {
            const startPosition = (params) => secRef[params].current.offsetTop - 100
            const endPosition = (params) => secRef[params].current.offsetTop + secRef[params].current.offsetHeight - 100
            const onPosition = pageYOffset < endPosition(index) && pageYOffset > startPosition(index)
            onPosition && changeNavBtn(index)
        })
        changeNavToggle(false)
    }, [pageYOffset])

    const navlist = navs.map((nav, index) => (
        <a onClick={() => btnHandler(index)}
            key={nav}
            className={`${navBtn == index ? "bg-purple-600 text-white" : "text-gray-800"} 
            block md:inline hover:bg-purple-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer hover:transition-opacity duration-500 ease-in-out
        `}>{nav}</a>)
    )
    return <> {navlist} </>

}

export default NavMenu
