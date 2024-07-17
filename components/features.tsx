import type { NextPage } from "next";
import AssuredQuality from "./assured-quality";

export type FeaturesType = {
  className?: string;
};

const Features: NextPage<FeaturesType> = ({ className = "" }) => {
  return (
    <section
      className={`flex flex-row items-start justify-start pt-0 pb-[49.5px] pr-2.5 pl-[9px] box-border max-w-full text-center text-5xl-6 text-antiquewhite-100 font-poppins mq750:pb-8 mq750:box-border ${className}`}
    >
      <div className="overflow-hidden flex flex-row flex-wrap items-start justify-center py-[51px] px-[79px] box-border gap-[19.7px] max-w-full mq750:pl-[39px] mq750:pr-[39px] mq750:box-border mq450:pt-[33px] mq450:pb-[33px] mq450:box-border">
        <AssuredQuality
          frame="/frame-2.svg"
          assuredQuality="Assured Quality"
          discoverTopRatedShopsOffe="Discover top-rated shops offering high-quality items, ensuring that you get the best value for your money."
        />
        <AssuredQuality
          frame="/frame-3.svg"
          assuredQuality="Reliability"
          discoverTopRatedShopsOffe="Shop with confidence knowing that all transactions on Emple Suk are secure and your personal information is protected."
          propPadding="37.5px 10px"
        />
        <AssuredQuality
          frame="/e73e2821510d456eb3bd9363037e93e3.svg"
          assuredQuality="Variety"
          discoverTopRatedShopsOffe="Explore a diverse selection of stores and products, ensuring you find exactly what you need, no matter your taste or preference."
          propPadding="37.5px 10px"
        />
        <AssuredQuality
          frame="/frame-4.svg"
          assuredQuality="Convenience"
          discoverTopRatedShopsOffe="Enjoy a user-friendly platform that makes browsing, comparing, and purchasing products easy and hassle-free."
          propPadding="51px 10px"
        />
      </div>
    </section>
  );
};

export default Features;
