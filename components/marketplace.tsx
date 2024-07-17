import type { NextPage } from "next";

export type MarketplaceType = {
  className?: string;
};

const Marketplace: NextPage<MarketplaceType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[49.5px] pr-[21px] pl-5 box-border max-w-full text-left text-30xl-2 text-black font-poppins mq750:pb-8 mq750:box-border ${className}`}
    >
      <div className="w-[1244.8px] flex flex-row items-start justify-start gap-[188px] max-w-full lg:gap-[94px] mq750:gap-[47px] mq450:gap-[23px] mq1050:flex-wrap">
        <div className="h-[616px] w-[410.3px] relative max-w-full flex items-center justify-center">
          <img
            className="h-full w-full object-contain absolute left-[23px] top-[0px] [transform:scale(1.114)] mq1050:flex-1"
            loading="lazy"
            alt=""
            src="/image-8@2x.png"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[159px] px-0 pb-0 box-border min-w-[420px] max-w-full mq750:min-w-full mq450:pt-[103px] mq450:box-border">
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-start pt-[9.9px] px-[9px] pb-[9.8px] box-border gap-[23.6px] max-w-full">
            <div className="relative font-prociono inline-block max-w-full mq450:text-11xl mq1050:text-20xl">
              <p className="m-0">Discover the Emple Suk</p>
              <p className="m-0"> Marketplace</p>
            </div>
            <div className="relative text-mid-7">
              <p className="m-0">
                Discover a variety of shops at Emple Suk. Find everything from
                fashion to
              </p>
              <p className="m-0">{`everyday items in one convenient place.Start shopping `}</p>
              <p className="m-0">with Emple Suk today!</p>
            </div>
            <div className="relative text-lgi-7 [text-decoration:underline] text-center inline-block max-w-full">
              EXPLORE THE WORLD OF EMPLE SUK
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marketplace;
