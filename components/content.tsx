import type { NextPage } from "next";
import { useCallback } from "react";

export type ContentType = {
  className?: string;
};

const Content: NextPage<ContentType> = ({ className = "" }) => {
  const onCreateShopClick = useCallback(() => {
    // Please sync "shop list" to the project
  }, []);

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[19.1px] box-border max-w-full text-center text-30xl-2 text-teal font-poppins ${className}`}
    >
      <div className="w-[1241.8px] flex flex-col items-end justify-start gap-[43.4px] max-w-full mq750:gap-[22px]">
        <b className="self-stretch relative mq450:text-11xl mq1050:text-20xl">
          <p className="m-0">{`Discover Your Next Favorite Store: `}</p>
          <p className="m-0">Explore, Shop, Enjoy!</p>
        </b>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full text-6xl text-gray">
          <div className="w-[871.9px] flex flex-col items-start justify-start gap-[95.1px] max-w-full mq450:gap-[24px] mq1050:gap-[48px]">
            <div className="self-stretch relative mq450:text-xl">
              Emple Suk is your one-stop destination for finding and shopping at
              the best local stores. Browse a wide range of shops, compare
              products, and enjoy a better shopping experience.Shop smarter with
              Emple Suk!
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full">
              <div className="flex flex-row flex-wrap items-start justify-center gap-[33.4px] max-w-full mq750:gap-[17px]">
                <button
                  className="cursor-pointer [border:none] py-[10.8px] px-[57px] bg-teal rounded-5xl-6 overflow-hidden flex flex-row items-start justify-start gap-[14.8px] mq450:flex-wrap mq450:pl-5 mq450:pr-5 mq450:box-border"
                  onClick={onCreateShopClick}
                >
                  <div className="relative text-5xl-6 font-medium font-poppins text-antiquewhite-100 text-center inline-block min-w-[124px] mq450:text-xl">
                    Shop Now
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[3.3px] px-0 pb-0">
                    <img
                      className="w-[30.5px] h-[30.5px] relative overflow-hidden shrink-0"
                      alt=""
                      src="/frame-1.svg"
                    />
                  </div>
                </button>
                <button className="cursor-pointer py-[9px] pr-[66px] pl-[67px] bg-antiquewhite-100 rounded-5xl-6 overflow-hidden flex flex-row items-start justify-start gap-[14.8px] whitespace-nowrap border-[1px] border-solid border-black hover:bg-antiquewhite-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-200 mq450:pl-5 mq450:pr-5 mq450:box-border">
                  <div className="relative text-5xl-6 font-medium font-poppins text-darkslategray-100 text-center">
                    Create Shop
                  </div>
                  <img
                    className="h-[31.5px] w-[31.5px] relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/frame.svg"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
