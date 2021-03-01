import { forwardRef, MutableRefObject, useContext, useImperativeHandle, useRef } from "react"
import NumberFormat from "react-number-format"
import { NavContext } from "../../contexts/NavContextProvider"
import { getSectionEl } from "./getSectionEl"

import { paketHarga } from "../../types/type"

type props = {
    paketHarga: paketHarga
}

const Section3 = forwardRef(({ paketHarga }: props, ref) => {
    const { secRef } = useContext(NavContext)
    const sectionRef = useRef<HTMLDivElement>(null)

    useImperativeHandle(secRef[2], () => getSectionEl(sectionRef))


    return (
        <div ref={sectionRef} className="py-14 bg-gradient-to-b from-gray-600 to-gray-300 font-roboto text-gray-50 h-screen flex flex-col place-content-center">
            <div>
                <h1 className="text-3xl font-bold uppercase text-center ">Paket Harga</h1>
                <hr className="border-t-2 border-gray-500 mx-24 pb-5"></hr>
                <h1 className="text-lg text-center font-normal mb-10 font-poppins">Pilih paket terbitmu & rasakanlah kemudahan menerbitkan karya.</h1>
                <div className="shadow-md md:overflow-hidden overflow-x-scroll sm:rounded-lg mx-2 md:mx-20 text-gray-900">
                    <table className="w-full divide-y divide-gray-200 text-center ">
                        <thead className="bg-gray-50  border border-gray-300">
                            <tr>
                                <th rowSpan={2} className="px-2 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider w-1/12 border border-gray-300">BANYAK HALAMAN</th>
                                <th colSpan={7} className="px-2 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider border-b border-gray-300">JUMLAH & HARGA PER EKSEMPLAR</th>
                            </tr>
                            <tr>
                                {paketHarga.eks.map((data, index) => (
                                    <th key={data} className="px-2 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">{data}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white text-xs divide-y divide-gray-200">
                            {paketHarga.hal.map((hal, i) => (
                                <tr key={`${hal}`}>
                                    <td className="px-2 py-4 whitespace-nowrap font-medium text-gray-600 border border-gray-200 ">{hal}</td>
                                    {paketHarga.eks.map((eks, j) => (
                                        paketHarga.data.map((data, k) => {
                                            if (hal == data.hal && eks == data.eks) {
                                                return (
                                                    <td key={data.harga} className="border border-gray-300 px-2 py-4 whitespace-nowrap font-medium">
                                                        < NumberFormat value={data.harga} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} />
                                                    </td>
                                                )
                                            }
                                        })
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
})

export default Section3