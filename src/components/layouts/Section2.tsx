import { resolveHref } from "next/dist/next-server/lib/router/router"
import { forwardRef, MutableRefObject, useContext, useImperativeHandle, useRef } from "react"
import { NavContext } from "../../contexts/NavContextProvider"
import { getSectionEl } from "./getSectionEl"
import { FaBookOpen, } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

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

const Section2 = forwardRef(() => {
    const { secRef } = useContext(NavContext)
    const sectionRef = useRef<HTMLDivElement>(null)

    useImperativeHandle(secRef[1], () => getSectionEl(sectionRef)
    )


    return (
        <div ref={sectionRef} className="py-14 font-roboto bg-gradient-to-r from-gray-200 to-gray-50 min-h-screen flex flex-col place-content-center">
            <div>
                <h1 className="text-3xl font-bold uppercase text-center text-gray-900">Spesifikasi Naskah</h1>
                <hr className="text-gray-500 border-t-2 border-gray-300 mx-24 pb-8"></hr>
                <div className="flex  flex-col md:flex-row justify-items-center items-center place-content-evenly px-5 ">
                    {naskahSpecs.map((data, index) => (
                        <div key={data.name} className="md:w-1/3 group text-gray-900 hover:bg-gray-50 border-transparent border-4 hover:border-indigo-200 rounded-md cursor-default my-5">

                            {data.name === "isi" ?

                                <div className="flex flex-col px-5 py-2 justify-items-center items-center text-center">
                                    <svg className=" text-gray-600  h-24 " xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><title>Newspaper</title><path d='M368 415.86V72a24.07 24.07 0 00-24-24H72a24.07 24.07 0 00-24 24v352a40.12 40.12 0 0040 40h328' fill='none' stroke='currentColor' strokeLinejoin='round' strokeWidth='32' /><path d='M416 464h0a48 48 0 01-48-48V128h72a24 24 0 0124 24v264a48 48 0 01-48 48z' fill='none' stroke='currentColor' strokeLinejoin='round' strokeWidth='32' /><path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M240 128h64M240 192h64M112 256h192M112 320h192M112 384h192' /><path fill='currentColor' d='M176 208h-64a16 16 0 01-16-16v-64a16 16 0 0116-16h64a16 16 0 0116 16v64a16 16 0 01-16 16z' /></svg>
                                    <h1 className="text-2xl font-bold uppercase  mt-3 mb-1"> {data.name}</h1>
                                    <h1 className="text-base font-medium "><span className="bg-indigo-200 rounded-lg px-1">Warna</span> : {data.warna}</h1>
                                    <h1 className="text-base font-medium "><span className="bg-indigo-200 rounded-lg px-1">Jenis Kertas</span> : {data.jenisKertas}</h1>
                                    <h1 className="text-base font-medium "><span className="bg-indigo-200 rounded-lg px-1">Ukuran</span>: {data.ukuran}</h1>

                                </div>
                                : data.name === "sampul" ?
                                    <div className="flex flex-col px-5 py-2 justify-items-center items-center text-center">
                                        <svg className=" text-gray-600  h-24 " xmlns='http://www.w3.org/2000/svg' fill="currentColor" viewBox='0 0 512 512'><title>Book</title><path d='M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0116 16v288a16 16 0 01-16 16c-128 0-177.45 25.81-208 64-30.37-38-80-64-208-64-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0116-16c131.57.59 192 32.84 208 96zM256 160v288' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' /></svg>
                                        <h1 className="text-2xl font-bold uppercase mt-3 mb-1"> {data.name}</h1>
                                        <div className="text-base font-medium "><span className="bg-indigo-200 rounded-lg px-1">Warna</span> : {data.warna}</div>
                                        <div className="text-base font-medium "><span className="bg-indigo-200 rounded-lg px-1">Jenis Kertas</span>: {data.jenisKertas}</div>
                                        <div className="text-base font-medium "><span className="bg-indigo-200 rounded-lg px-1">Laminasi</span> : {data.laminasi}</div>

                                    </div>
                                    : data.name === "finalisasi" ?
                                        <div className="flex flex-col px-5 py-2 justify-items-center items-center text-center">
                                            <svg className=" text-gray-600 h-24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <h1 className="text-2xl font-bold uppercase mt-3 mb-1"> {data.name}</h1>

                                            {data.values.map((item, index) => (
                                                <h1 key={item} className="text-base font-medium ">{item}</h1>
                                            ))}

                                        </div>
                                        : ""}
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
})

export default Section2