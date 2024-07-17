import type { NextPage } from "next";

export type FooterLinksType = {
  className?: string;
};

const FooterLinks: NextPage<FooterLinksType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1326px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-sm-9 text-teal font-work-sans ${className}`}
    >
      <div className="w-[861.9px] flex flex-row items-start justify-between shrink-0 gap-[20px] max-w-full mq750:flex-wrap">
        <div className="flex flex-col items-start justify-start gap-[7.5px]">
          <div className="relative text-base-2 font-medium inline-block min-w-[87px]">
            Contact us
          </div>
          <div className="relative font-light inline-block min-w-[93px]">
            Client support
          </div>
          <div className="relative font-light inline-block min-w-[129px]">
            Common questions
          </div>
          <div className="relative font-light">Orders and deliveries</div>
          <div className="relative font-light inline-block min-w-[51px]">
            Returns
          </div>
        </div>
        <div className="w-[250.7px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[7.5px]">
          <div className="relative text-base-2 font-medium">
            About emple Suk
          </div>
          <div className="relative font-light inline-block min-w-[60px]">
            About Us
          </div>
          <div className="relative font-light inline-block min-w-[50px]">
            Careers
          </div>
          <a
            className="relative text-[inherit] [text-decoration:none]"
            href={`https://www.amazon.com.br/gp/browse.html?node=23490129011&ref_=footer_gw_m_b_corporate`}
            target="_blank"
          >
            Corporate information
          </a>
          <div className="relative font-light inline-block min-w-[80px]">
            Accessibility
          </div>
        </div>
        <div className="w-[175.6px] flex flex-col items-start justify-start pt-[20.8px] px-0 pb-0 box-border text-base-2">
          <div className="self-stretch flex flex-row items-end justify-start gap-[9.2px]">
            <div className="flex-1 flex flex-col items-start justify-start gap-[11px]">
              <div className="relative font-medium inline-block min-w-[48px]">
                Social
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[9.2px]">
                <div className="flex flex-col items-start justify-start pt-[1.1px] px-0 pb-0">
                  <img
                    className="w-[37px] h-[37px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/instagramsvgrepocom-1.svg"
                  />
                </div>
                <img
                  className="h-[37px] w-[37px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/facebooksvgrepocom-1.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[2.3px] px-0 pb-0">
                  <img
                    className="w-[37px] h-[37px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/pinterestsvgrepocom-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[2.3px]">
              <img
                className="w-[37px] h-[37px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/logotwittersvgrepocom-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
