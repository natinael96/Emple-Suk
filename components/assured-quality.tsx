import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type AssuredQualityType = {
  className?: string;
  frame?: string;
  assuredQuality?: string;
  discoverTopRatedShopsOffe?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const AssuredQuality: NextPage<AssuredQualityType> = ({
  className = "",
  frame,
  assuredQuality,
  discoverTopRatedShopsOffe,
  propPadding,
}) => {
  const assuredQualityStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={`w-[295.2px] rounded-5xl-6 bg-teal overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[48.5px] px-2.5 pb-[48.6px] box-border gap-[16.7px] text-center text-5xl-6 text-antiquewhite-100 font-poppins ${className}`}
      style={assuredQualityStyle}
    >
      <img
        className="w-[68.9px] h-[68.9px] relative overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src={frame}
      />
      <b className="relative mq450:text-xl">{assuredQuality}</b>
      <div className="w-[285.4px] relative text-mid-7 text-white text-left inline-block">
        {discoverTopRatedShopsOffe}
      </div>
    </div>
  );
};

export default AssuredQuality;
