const NavMenu = ({ addClass }) => {
    const datas: string[] = ["Home", "Spesifikasi", "Paket"]
    const menu = datas.map((data) => <a href="#" key={data}
        className={`${addClass} ${data == "Home" ? "bg-purple-600 text-white" : "text-gray-800"} hover:bg-purple-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}>{data}</a>
    )
    return (
        <>
            {menu}
        </>
    )
}

export default NavMenu
