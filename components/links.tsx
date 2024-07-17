import type { NextPage } from "next";
import { useCallback } from "react";

export type LinksType = {
  className?: string;
};

const Links: NextPage<LinksType> = ({ className = "" }) => {
  const onNavButtonClick = useCallback(() => {
    // Please sync "shop list" to the project
  }, []);

  return (
    <div
      className={`w-[570.2px] rounded-[29.52px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[6.9px] px-px box-border gap-[28.5px] max-w-full mq1050:hidden ${className}`}
    >
      <button className="cursor-pointer py-[7px] px-[22px] bg-antiquewhite-100 w-[96.4px] rounded-[29.52px] box-border flex flex-row items-center justify-center gap-[9.8px] border-[1px] border-solid border-black hover:bg-antiquewhite-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-200">
        <img
          className="h-[17.7px] w-[17.7px] relative hidden"
          alt=""
          src="/svgrepo-iconcarrier.svg"
        />
        <a className="[text-decoration:none] w-[50px] relative text-mid-7 font-bold font-nunito text-black text-center inline-block min-w-[50px]">
          Home
        </a>
      </button>
      <button
        className="cursor-pointer [border:none] pt-[8.6px] px-[27px] pb-[8.7px] bg-teal rounded-[29.52px] flex flex-row items-center justify-center gap-[9.8px] hover:bg-darkcyan"
        onClick={onNavButtonClick}
      >
        <img
          className="h-[17.7px] w-[17.7px] relative hidden"
          alt=""
          src="/svgrepo-iconcarrier.svg"
        />
        <a className="[text-decoration:none] relative text-mid-7 font-medium font-nunito text-antiquewhite-100 text-center inline-block min-w-[42px]">
          Shop
        </a>
      </button>
      <button className="cursor-pointer [border:none] pt-[8.6px] px-[9px] pb-[8.7px] bg-teal flex-1 rounded-[29.52px] flex flex-row items-center justify-center gap-[9.8px] whitespace-nowrap hover:bg-darkcyan">
        <img
          className="h-[17.7px] w-[17.7px] relative hidden"
          alt=""
          src="/svgrepo-iconcarrier.svg"
        />
        <a className="[text-decoration:none] relative text-mid-7 font-medium font-nunito text-antiquewhite-300 text-center inline-block min-w-[99px]">
          Create Shop
        </a>
      </button>
      <button className="cursor-pointer [border:none] pt-[8.3px] px-[18px] pb-[8.4px] bg-teal flex-[0.8324] rounded-[29.52px] flex flex-row items-center justify-center gap-[9.8px] whitespace-nowrap hover:bg-darkcyan">
        <img
          className="h-[17.7px] w-[17.7px] relative hidden"
          alt=""
          src="/svgrepo-iconcarrier.svg"
        />
        <a className="[text-decoration:none] relative text-mid-7 font-medium font-nunito text-antiquewhite-100 text-center inline-block min-w-[88px]">
          Contact Us
        </a>
      </button>
      <img
        className="h-[17.7px] w-[17.7px] relative"
        loading="lazy"
        alt=""
        src="/group-43.svg"
      />
    </div>
  );
};

export default Links;
