import { createContext, MutableRefObject, useRef, useState, ReactNode, FC } from "react"

type NavContextType = {
    secRef: MutableRefObject<any>[]
    navDatas: string[]
    navBtn: number
    changeNavBtn: (value: number) => void
    navToggle: boolean
    changeNavToggle: (value: boolean) => void
};



export const NavContext = createContext<NavContextType | undefined>(undefined);

const NavContextProvider: FC<ReactNode> = ({ children }) => {

    const [navDatas, setNavDatas] = useState(["Home", "Spesifikasi", "Paket"])
    const [navBtn, setNavBtn] = useState(0)
    const [navToggle, setNavToggle] = useState(false)
    const secRef = navDatas.map(() => {
        return useRef()
    })
    const changeNavBtn = (value) => {
        setNavBtn(value)
    }
    const changeNavToggle = (value) => {
        setNavToggle(value)
    }
    return (
        <NavContext.Provider value={{ navDatas, secRef, navBtn, changeNavBtn, navToggle, changeNavToggle }}>
            {children}
        </NavContext.Provider>
    )
}

export default NavContextProvider