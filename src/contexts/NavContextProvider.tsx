import { createContext, MutableRefObject, useRef, useState, ReactNode, FC } from "react"

type NavContextType = {
    secRef: MutableRefObject<any>[]
    navs: string[]
    navBtn: number
    changeNavBtn: (value: number) => void
    navToggle: boolean
    changeNavToggle: (value: boolean) => void
};

export const NavContext = createContext<NavContextType | undefined>(undefined);

const NavContextProvider: FC<ReactNode> = ({ children }) => {

    const [navs, setNavs] = useState(["Home", "Spesifikasi", "Paket", "Layanan"])
    const [navBtn, setNavBtn] = useState(0)
    const [navToggle, setNavToggle] = useState(false)
    const secRef = navs.map(() => useRef())
    const changeNavBtn = (value) => {
        setNavBtn(value)
    }
    const changeNavToggle = (value) => {
        setNavToggle(value)
    }
    return (
        <NavContext.Provider value={{ navs, secRef, navBtn, changeNavBtn, navToggle, changeNavToggle }}>
            {children}
        </NavContext.Provider>
    )
}

export default NavContextProvider