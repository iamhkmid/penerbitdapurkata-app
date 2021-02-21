import { createContext, MutableRefObject, useRef, useState, ReactNode, FC } from "react"

type NavContextType = {
    secRef: MutableRefObject<any>[]
    navDatas: string[]
    navBtn: number
    changeNavBtn: (value: number) => void
};


export const NavContext = createContext<NavContextType | undefined>(undefined);

const NavContextProvider: FC<ReactNode> = ({ children }) => {

    const [navDatas, setNavDatas] = useState(["Home", "Spesifikasi", "Paket"])
    const [navBtn, setNavBtn] = useState(0)
    const secRef = navDatas.map(() => {
        return useRef()
    })
    const changeNavBtn = (value) => {
        setNavBtn(value)
    }

    return (
        <NavContext.Provider value={{ navDatas, secRef, navBtn, changeNavBtn }}>
            {children}
        </NavContext.Provider>
    )
}

export default NavContextProvider