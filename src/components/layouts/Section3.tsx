import { forwardRef, MutableRefObject, useContext, useImperativeHandle, useRef } from "react"
import NumberFormat from "react-number-format"
import { NavContext } from "../../contexts/NavContextProvider"
import { getSectionEl } from "./getSectionEl"

const paketHarga = {
    eks: [30, 50, 100, 125, 150, 200],
    hal: [80, 100, 120, 150, 200],
    data: [
        { eks: 30, hal: 80, harga: 66500 }, { eks: 30, hal: 100, harga: 69200 },
        { eks: 30, hal: 120, harga: 73800 }, { eks: 30, hal: 150, harga: 83500 },
        { eks: 30, hal: 200, harga: 88200 },
        { eks: 50, hal: 80, harga: 49500 }, { eks: 50, hal: 100, harga: 54200 },
        { eks: 50, hal: 120, harga: 59800 }, { eks: 50, hal: 150, harga: 66500 },
        { eks: 50, hal: 200, harga: 68200 },
        { eks: 100, hal: 80, harga: 38500 }, { eks: 100, hal: 100, harga: 41200 },
        { eks: 100, hal: 120, harga: 45800 }, { eks: 100, hal: 150, harga: 49500 },
        { eks: 100, hal: 200, harga: 53200 },
        { eks: 125, hal: 80, harga: 36500 }, { eks: 125, hal: 100, harga: 38200 },
        { eks: 125, hal: 120, harga: 42800 }, { eks: 125, hal: 150, harga: 46500 },
        { eks: 125, hal: 200, harga: 49200 },
        { eks: 150, hal: 80, harga: 34500 }, { eks: 150, hal: 100, harga: 36200 },
        { eks: 150, hal: 120, harga: 40800 }, { eks: 150, hal: 150, harga: 44500 },
        { eks: 150, hal: 200, harga: 47200 },
        { eks: 200, hal: 80, harga: 31500 }, { eks: 200, hal: 100, harga: 33200 },
        { eks: 200, hal: 120, harga: 37800 }, { eks: 200, hal: 150, harga: 41500 },
        { eks: 200, hal: 200, harga: 44200 },
    ]
}

const Section3 = forwardRef(() => {
    const { secRef } = useContext(NavContext)
    const sectionRef = useRef<HTMLDivElement>(null)

    useImperativeHandle(secRef[2], () => getSectionEl(sectionRef))


    return (
        <div ref={sectionRef} className="py-14 bg-gradient-to-bl from-gray-800 to-gray-500 font-roboto text-gray-50">
            <h1 className="text-3xl font-bold uppercase text-center pt-3">Paket Harga</h1>
            <hr className="border-t-2 border-gray-500 mx-24 pb-8"></hr>
            <div className="shadow-md md:overflow-hidden overflow-x-scroll border border-gray-200 sm:rounded-lg mx-2 md:mx-20 text-gray-900">
                <table className="w-full divide-y divide-gray-200 text-center">
                    <thead className="bg-gray-50">
                        <tr>
                            <th rowSpan={2} className="px-2 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider w-1/12">BANYAK HALAMAN</th>
                            <th colSpan={7} className="px-2 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider ">JUMLAH & HARGA PER EKSEMPLAR</th>
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
                                <td className="px-2 py-4 whitespace-nowrap font-medium text-gray-600">{hal}</td>
                                {paketHarga.eks.map((eks, j) => (
                                    paketHarga.data.map((data, k) => {
                                        if (hal == data.hal && eks == data.eks) {
                                            return (
                                                <td key={data.harga} className=" px-2 py-4 whitespace-nowrap font-medium">
                                                    < NumberFormat value={data.harga} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp.'} />
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
        </div >
    )
})

export default Section3