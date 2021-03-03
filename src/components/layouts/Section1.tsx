import React, {
  forwardRef,
  useContext,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { NavContext } from "../../contexts/NavContextProvider";
import { getSectionEl } from "./getSectionEl";
import MainBtn from "../buttons/MainBtn";
import { section1 } from "../../types/type";

type props = {
  section1: section1;
};

const Section1 = forwardRef(({ section1 }: props, ref) => {
  const { secRef } = useContext(NavContext);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scSc, setScSc] = useState(null);
  useImperativeHandle(secRef[0], () => getSectionEl(sectionRef));
  const btnHandler = () => {
    const position = secRef[1].current.offsetTop - 50;
    window.scrollTo({ top: position, behavior: "smooth" });
  };

  return (
    <div className="bg-white min-h-screen">
      <div
        ref={sectionRef}
        className=" max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 font-roboto pt-16"
      >
        <div className="px-4 py-6 sm:px-0">
          <div className=" pb-10 flex md:flex-row flex-col items-center ">
            <div className="md:w-1/2 ">
              <h1 className="font-bold text-base md:text-lg  mt-6 text-gray-700">
                {section1.text1}
              </h1>

              <h1 className="font-extrabold text-2xl md:text-4xl mt-5 md:mt-10 text-gray-900">
                {section1.text2}
              </h1>
              <h1 className="font-normal text-base md:text-xl lg:text-xl  mt-5 md:mt-10 text-justify text-gray-900">
                {section1.text3}
              </h1>
              <div className="flex place-content-center my-7 font-roboto">
                {section1.btnData.map((data, i) => {
                  const btnLink =
                    data.link === "btnHandler" ? (
                      <div key={data.name}>
                        <MainBtn
                          link={undefined}
                          handler={btnHandler}
                          name={data.name}
                        />
                      </div>
                    ) : (
                      <div key={data.name}>
                        <MainBtn
                          link={data.link}
                          handler={undefined}
                          name={data.name}
                        />
                      </div>
                    );

                  return btnLink;
                })}
              </div>
            </div>
            <div className="md:w-1/2 flex flex-col items-center md:px-5">
              <img
                className="max-h-full"
                src="/assets/banner.svg"
                alt="logo"
              ></img>
              <a
                className="font-roboto text-xs md:text-sm text-gray-400 text-center"
                href="http://www.freepik.com"
              >
                Designed by Freepik
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Section1;
