import { dataSection1 } from "../data/dataMain"
import TextSlider from "../TextSlider"

const Section1 = () => {
    return (
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 font-poppins">
            <div className="px-4 py-6 sm:px-0">
                <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex flex-col items-center ">
                    <h1 className="font-bold text-xs md:text-sm lg:text-base mt-6" >PENERBIT DAPURKATA</h1>
                    <TextSlider />
                    <h1 className="font-normal text-xs md:text-sm lg:text-base text-center mt-6 px-1 md:px-48">{dataSection1.textBanner}</h1>
                </div>
            </div>
        </div>
    )
}

export default Section1