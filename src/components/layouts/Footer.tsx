import data from "../../../data";
import SosialMedia from "../SosialMedia";

const Footer = () => {
  return (
    <div className="flex flex-col bg-gray-900">
      <div className="flex flex-wrap justify-center py-10 bg-gray-800 ">
        <div className="w-auto md:w-1/3 text-white px-20">
          <h1 className="text-2xl font-semibold mb-3"> No. Telp</h1>
          <h1>{data.footer.noWa}</h1>
        </div>
        <div className=" w-auto md:w-1/3 text-white px-10">
          <h1 className="text-2xl font-semibold mb-3">Alamat</h1>
          <h1>{data.footer.alamat}</h1>
        </div>
        <div className=" w-auto md:w-1/3 text-white px-10">
          <h1 className="text-2xl font-semibold mb-3">Sosial Media</h1>
          <SosialMedia />
        </div>
      </div>

      <div className="flex flex-col py-4 place-items-center ">
        <h1 className="text-base text-gray-50 ">
          DapurKata &copy; 2021 Made with ❤️
        </h1>
      </div>
    </div>
  );
};

export default Footer;
