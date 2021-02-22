import { resolveHref } from "next/dist/next-server/lib/router/router"
import { forwardRef, MutableRefObject, useContext, useImperativeHandle, useRef } from "react"
import { NavContext } from "../../contexts/NavContextProvider"
import { getSectionEl } from "./getSectionEl"
import { FaBookOpen, } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const Section2 = forwardRef(() => {
    const { secRef } = useContext(NavContext)
    const sectionRef = useRef<HTMLDivElement>(null)

    useImperativeHandle(secRef[1], () => getSectionEl(sectionRef)
    )
    const naskahSpecs = [
        {
            name: 'isi',
            warna: "Hitam-Putih",
            jenisKertas: "Bookpaper 72g/HVS 70g/HVS 80g",
            ukuran: "A5"
        },
        {
            name: "sampul",
            warna: "Fullcolor",
            jenisKertas: "Ivory 260 gram",
            laminasi: "Dof/Glossy"
        },
        {
            name: "finalisasi",
            values: ["Sampul kertas (softcover binding)",
                "Penjilidan (Binding)",
                "shrink"]
        }
    ]

    return (
        <div ref={sectionRef} className=" py-14 bg-gray-50 font-roboto bg-gradient-to-r from-gray-100 to-white">
            <h1 className="text-3xl font-bold uppercase text-center pt-3">Spesifikasi Naskah</h1>
            <hr className="text-gray-500 border-t-2 border-gray-300 mx-24 pb-8"></hr>
            <div className="flex flex-wrap justify-items-center items-center place-content-evenly">
                {naskahSpecs.map((data, index) => (
                    <div key={data.name} className="group bg-gray-100 text-gray-900 hover:bg-gray-200 border-transparent border-4 hover:border-indigo-200 rounded-md shadow-md cursor-default my-5">

                        {data.name === "isi" ?
                            <div className="flex">
                                <svg className="flex-grow-0 text-gray-600  h-10 pt-2 pl-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                </svg>
                                <div className="flex-grow px-5 py-2">
                                    <h1 className="text-2xl font-bold uppercase "> {data.name}</h1>
                                    <hr className="text-gray-500 border-t-2 border-gray-300 pb-3"></hr>
                                    <div>

                                        <h1 className="text-base font-medium "><span className="bg-indigo-200 rounded-lg px-1">Warna</span> : {data.warna}</h1>
                                        <h1 className="text-base font-medium "><span className="bg-indigo-200 rounded-lg px-1">Jenis Kertas</span> : {data.jenisKertas}</h1>
                                        <h1 className="text-base font-medium "><span className="bg-indigo-200 rounded-lg px-1">Ukuran</span>: {data.ukuran}</h1>

                                    </div>
                                </div>
                            </div>
                            : data.name === "sampul" ?
                                <div className="flex">

                                    <svg className="flex-grow-0 text-gray-600  h-10 pt-2 pl-2" xmlns='http://www.w3.org/2000/svg' fill="currentColor" viewBox='0 0 512 512'><title>Book</title><path d='M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0116 16v288a16 16 0 01-16 16c-128 0-177.45 25.81-208 64-30.37-38-80-64-208-64-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0116-16c131.57.59 192 32.84 208 96zM256 160v288' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' /></svg>
                                    <div className="flex-grow px-5 py-2">
                                        <h1 className="text-2xl font-bold uppercase "> {data.name}</h1>
                                        <hr className="text-gray-500 border-t-2 border-gray-300 pb-3"></hr>
                                        <div>
                                            <div className="text-base font-medium "><span className="bg-indigo-200 rounded-lg px-1">Warna</span> : {data.warna}</div>
                                            <div className="text-base font-medium "><span className="bg-indigo-200 rounded-lg px-1">Jenis Kertas</span>: {data.jenisKertas}</div>
                                            <div className="text-base font-medium "><span className="bg-indigo-200 rounded-lg px-1">Laminasi</span> : {data.laminasi}</div>

                                        </div>
                                    </div>
                                </div>
                                : data.name === "finalisasi" ?
                                    <div className="flex">
                                        <svg className="flex-grow-0 text-gray-600  h-10 pt-2 pl-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <div className="flex-grow px-5 py-2">
                                            <h1 className="text-2xl font-bold uppercase "> {data.name}</h1>
                                            <hr className="text-gray-500 border-t-2 border-gray-300 pb-3"></hr>
                                            {data.values.map((item, index) => (
                                                <h1 key={item} className="text-base font-medium ">{item}</h1>
                                            ))}
                                        </div>
                                    </div>
                                    : ""}
                    </div>
                ))}
            </div>
        </div>
    )
})

export default Section2