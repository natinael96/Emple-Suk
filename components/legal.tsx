import type { NextPage } from "next";

export type LegalType = {
  className?: string;
};

const Legal: NextPage<LegalType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch h-[71.3px] box-border overflow-x-auto shrink-0 flex flex-row items-start justify-start pt-[25.4px] pb-[24.6px] pr-[167px] pl-[302px] gap-[36.8px] text-left text-base-2 text-teal font-work-sans border-[1.2px] border-solid border-white mq750:gap-[18px] mq750:pl-[151px] mq750:pr-[83px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
    >
      <div className="w-[91.4px] shrink-0 flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border">
        <a
          className="w-[57px] relative font-medium text-[inherit] inline-block [text-decoration:none]"
          href="https://www.farfetch.com/br/privacy-policy/"
          target="_blank"
        >
          Privacy
        </a>
      </div>
      <div className="w-[66px] relative font-medium inline-block">Sitemap</div>
      <div className="w-[286.5px] shrink-0 flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border">
        <a
          className="w-[251px] relative font-medium text-[inherit] inline-block [text-decoration:none]"
          href="https://www.farfetch.com/br/protection-of-intellectual-property"
          target="_blank"
        >
          Intellectual property protection
        </a>
      </div>
      <div className="w-[149.1px] shrink-0 flex flex-col items-start justify-start py-0 pr-[7px] pl-0 box-border">
        <a
          className="self-stretch relative font-medium text-[inherit] [text-decoration:none]"
          href="https://www.farfetch.com/br/cookie-preferences"
          target="_blank"
        >
          Configure cookies
        </a>
      </div>
      <div className="w-[205px] relative font-medium inline-block">
        Supplier Code of Conduct
      </div>
    </div>
  );
};

export default Legal;
