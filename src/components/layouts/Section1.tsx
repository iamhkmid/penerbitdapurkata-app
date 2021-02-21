import { dataSection1 } from "../data/dataMain"
import TextSlider from "../TextSlider"
import React, { forwardRef, MutableRefObject, SyntheticEvent, useContext, useEffect, useImperativeHandle, useRef, useState } from "react"
import NavContextProvider, { NavContext } from "../../contexts/NavContextProvider"

export type sec1Handle = {
    refHandler: () => void
}

const Section1 = forwardRef(() => {
    const { secRef } = useContext(NavContext)
    const sectionRef = useRef<HTMLDivElement>(null)
    const [scSc, setScSc] = useState(null)
    useImperativeHandle(secRef[0], (): sec1Handle => ({
        refHandler() {
            return sectionRef.current.offsetTop
        }
    }))



    return (
        <div ref={sectionRef} className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 font-roboto pt-20">
            <div className="px-4 py-6 sm:px-0">
                <div className="border-4 border-dashed border-gray-200 rounded-lg pb-10 flex flex-col items-center ">
                    <h1 className="font-bold text-base md:text-lg text-center px-5 md:px-40 mt-6 text-gray-700" >
                        PENERBIT DAPURKATA
                        </h1>
                    <h1 className="font-bold text-sm md:text-base text-center px-5 md:px-40 text-gray-700" >
                        Penerbit Buku Pertama Resmi di Bangka Belitung
                        </h1>
                    <h1 className="font-extrabold text-xl md:text-4xl text-center px-5 md:px-40 mt-20 text-gray-900" >
                        Pilih paket terbitmu & rasakanlah kemudahan menerbitkan karya. Karena di sini, naskahmu diracik dengan sempurna.
                        </h1>
                    <div className="text-3xl">aaaa{scSc}</div>
                    <h1 className="font-normal text-base md:text-xl lg:text-xl text-center mt-20 px-5 md:px-48 text-gray-900">
                        "Dalam banyak diskusi tentang perubahan zaman, buku selalu mendapat tempat khusus sebagai energi penggerak manusia untuk menciptakan sesuatu. Dari sini, kita paham bahwa buku selalu hadir sebagai bagian penting dalam peradaban.Bersama buku, kita menyempurnakan kemanusiaan.Bersama buku, kita mendorong perubahan.Tindakan ini dimulai dari kita, dimulai dari Anda.Mari berkolaborasi menciptakan buku - buku terbaik! Buku Anda akan menjadi bagian dari sejarah."
                        </h1>
                </div>
            </div>
        </div>
    )
})

export default Section1