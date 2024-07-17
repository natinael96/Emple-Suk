import type { NextPage } from "next";
import { useCallback } from "react";

export type CallToActionType = {
  className?: string;
};

const CallToAction: NextPage<CallToActionType> = ({ className = "" }) => {
  const onCreateShopClick = useCallback(() => {
    // Please sync "shop list" to the project
  }, []);

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start py-0 pr-2.5 pl-[9px] box-border max-w-full text-center text-30xl-2 text-black font-poppins ${className}`}
    >
      <div className="flex-1 bg-peachpuff overflow-hidden flex flex-col items-center justify-start py-[25px] px-5 box-border gap-[24px] max-w-full">
        <div className="w-[586px] relative inline-block max-w-full mq450:text-11xl mq1050:text-20xl">
          Ready To Get Started?
        </div>
        <div className="w-[586.3px] flex flex-row items-start justify-start py-0 pr-7 pl-[27px] box-border max-w-full text-lgi-7">
          <div className="flex-1 relative inline-block max-w-full">
            Start exploring and find what you love today!
          </div>
        </div>
        <div className="w-[586.3px] flex flex-row items-start justify-center py-0 pr-px pl-0 box-border max-w-full">
          <button
            className="cursor-pointer [border:none] py-[10.8px] px-[57px] bg-teal rounded-5xl-6 overflow-hidden flex flex-row items-start justify-start gap-[14.7px] mq450:pl-5 mq450:pr-5 mq450:box-border"
            onClick={onCreateShopClick}
          >
            <div className="relative text-5xl-6 font-medium font-poppins text-antiquewhite-100 text-center inline-block min-w-[124px] mq450:text-xl">
              Shop Now
            </div>
            <div className="flex flex-col items-start justify-start pt-[3.2px] px-0 pb-0">
              <img
                className="w-[30.5px] h-[30.5px] relative overflow-hidden shrink-0"
                alt=""
                src="/frame-5.svg"
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
