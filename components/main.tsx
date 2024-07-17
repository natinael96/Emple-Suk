import type { NextPage } from "next";
import Links from "./links";
import Loginsignup from "./loginsignup";

export type MainType = {
  className?: string;
};

const Main: NextPage<MainType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 pb-[64.9px] pr-2.5 pl-[9px] box-border max-w-full ${className}`}
    >
      <header className="flex-1 [backdrop-filter:blur(4px)] overflow-hidden flex flex-row items-center justify-between pt-[9.8px] px-[42px] pb-[9.9px] box-border gap-[20px] max-w-full text-center text-4xl-6 text-lightsalmon font-nunito lg:pl-[21px] lg:pr-[21px] lg:box-border">
        <div className="overflow-hidden flex flex-row items-start justify-start pt-[9.9px] px-[17px] pb-[9.8px]">
          <button className="cursor-pointer [border:none] pt-[7.1px] px-[18px] pb-[7.2px] bg-teal rounded-79xl-4 flex flex-row items-center justify-center gap-[9.8px] whitespace-nowrap hover:bg-darkcyan">
            <img
              className="h-[17.7px] w-[17.7px] relative hidden"
              alt=""
              src="/svgrepo-iconcarrier.svg"
            />
            <a className="[text-decoration:none] relative text-mid-7 font-medium font-poppins text-antiquewhite-100 text-center inline-block min-w-[92px]">
              Emple Suk
            </a>
          </button>
        </div>
        <Links />
        <Loginsignup />
      </header>
    </section>
  );
};

export default Main;
