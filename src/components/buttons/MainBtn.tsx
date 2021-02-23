const MainBtn = ({ link, name, handler }) => {

    const btnLink = link === undefined ?
        <a onClick={handler}
            className="cursor-pointer bg-gray-800 mx-5 text-white text-center text-sm md:text-sm px-3 md:px-5 py-2 md:py-3 font-normal rounded-md uppercase hover:bg-gray-700 hover:bor focus:ring-4 ring-0 ring-offset-purple-500 ">
            {name}
        </a>
        : <a href={link}
            className=" bg-gray-800 mx-5 text-white text-center  text-sm md:text-sm px-3 md:px-5 py-2 md:py-3 font-normal rounded-md uppercase hover:bg-gray-700 hover:bor focus:ring-4 ring-0 ring-offset-purple-500 ">
            {name}
        </a>

    return btnLink
}

export default MainBtn