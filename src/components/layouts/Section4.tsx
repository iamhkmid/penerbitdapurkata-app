import { forwardRef, useContext, useImperativeHandle, useRef } from "react"
import { NavContext } from "../../contexts/NavContextProvider"
import { getSectionEl } from "./getSectionEl"
import { contents } from "../../types/type"

type props = {
    contents: contents
}
const Section4 = forwardRef(({ contents }: props, ref) => {
    const { secRef } = useContext(NavContext)
    const sectionRef = useRef<HTMLDivElement>(null)

    useImperativeHandle(secRef[3], () => getSectionEl(sectionRef))

    return (
        <div ref={sectionRef} className="bg-gradient-to-br from-gray-50 to-gray-200 min-h-screen flex flex-col place-content-center py-10">
            <h1 className="text-3xl font-bold uppercase text-center py-10 ">Layanan</h1>
            <div className="flex flex-wrap">
                <div className="md:w-1/2 flex flex-col items-center md:px-5">
                    <img className="max-h-full px-20" src="/assets/banner2.svg" alt="logo"></img>
                    <a className="font-roboto text-xs md:text-sm text-gray-400 text-center" href="http://www.freepik.com">Designed by Freepik</a>
                </div>
                <div className="md:w-1/2 mt-10 md:mt-0 text-left px-2 md:px-0">
                    {contents.map((data, index) => (
                        <div key={data}>
                            <table>
                                <tbody>
                                    <tr >
                                        <td className=" align-top py-1">
                                            <svg className="inline h-4 md:h-5 text-green-600 pr-1 md:pr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </td>
                                        <td>
                                            <h1 key="data" className="inline text-sm md:text-lg font-poppins font-semibold text-gray-800">
                                                {data}
                                            </h1>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
})

export default Section4