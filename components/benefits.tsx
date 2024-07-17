import type { NextPage } from "next";

export type BenefitsType = {
  className?: string;
};

const Benefits: NextPage<BenefitsType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-teal overflow-hidden flex flex-col items-center justify-center py-[34.5px] px-2.5 box-border gap-[63.5px] max-w-full text-center text-31xl text-antiquewhite-100 font-poppins lg:pt-[22px] lg:pb-[22px] lg:box-border mq750:gap-[32px] mq450:gap-[16px] mq1050:pt-5 mq1050:pb-5 mq1050:box-border ${className}`}
    >
      <h1 className="m-0 w-[1019px] relative text-inherit font-semibold font-inherit inline-block max-w-full mq450:text-11xl mq1050:text-21xl">
        <p className="m-0">{`Give Customers What They Really Want `}</p>
        <p className="m-0">{`with an All-in-One Shopping `}</p>
        <p className="m-0">Platform</p>
      </h1>
      <div className="self-stretch overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 box-border gap-[13px] max-w-full text-left text-6xl lg:flex-wrap lg:justify-center">
        <div className="h-[343px] w-[563px] relative inline-block min-w-[563px] max-w-full lg:flex-1 mq750:min-w-full mq450:text-xl">
          <p className="m-0 text-21xl font-semibold">{`Know Your Shops `}</p>
          <p className="m-0 text-21xl font-semibold">Better</p>
          <p className="m-0">{`Get to know the shop behind each product. `}</p>
          <p className="m-0">Connect with stores through their trust levels,</p>
          <p className="m-0">{` read previous reviews, and judge based on `}</p>
          <p className="m-0">{`their trust badge ratings. Track the `}</p>
          <p className="m-0">performance and reliability of shops</p>
          <p className="m-0">to make informed shopping decisions.</p>
        </div>
        <img
          className="w-[600px] relative rounded-mini max-h-full object-cover max-w-full lg:flex-1"
          loading="lazy"
          alt=""
          src="/image-29@2x.png"
        />
      </div>
      <div className="self-stretch overflow-hidden flex flex-col items-center justify-start py-[149px] px-5 box-border gap-[22px] max-w-full text-21xl mq750:pt-[97px] mq750:pb-[97px] mq750:box-border">
        <h2 className="m-0 relative text-inherit font-semibold font-inherit inline-block max-w-full mq450:text-5xl mq1050:text-13xl">
          The Power of a Trustworthy Platform
        </h2>
        <div className="relative text-6xl inline-block max-w-full mq450:text-xl">
          <p className="m-0">
            All shops on Emple Suk are verified through their legal trade
            registrations,
          </p>
          <p className="m-0">{` ensuring they meet strict standards. Each shop has a known location, `}</p>
          <p className="m-0">
            providing accountability and security for any potential issues.
          </p>
        </div>
        <div className="overflow-hidden flex flex-row items-center justify-center py-0 px-2.5 gap-[33px] text-5xl-6 text-white mq450:gap-[16px]">
          <a className="[text-decoration:underline] relative text-[inherit] whitespace-nowrap mq450:text-xl">
            LEARN MORE
          </a>
          <img
            className="h-[22.1px] w-[86.1px] relative"
            loading="lazy"
            alt=""
            src="/arrow-2.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
