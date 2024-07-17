import type { NextPage } from "next";
import Main from "../components/main";
import Content from "../components/content";
import Features from "../components/features";
import Marketplace from "../components/marketplace";
import Benefits from "../components/benefits";
import CallToAction from "../components/call-to-action";
import FooterLinks from "../components/footer-links";
import Legal from "../components/legal";

const LandingPage: NextPage = () => {
  return (
    <div className="w-full relative bg-antiquewhite-100 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[7px] box-border gap-[28px] leading-[normal] tracking-[normal]">
      <Main />
      <Content />
      <Features />
      <Marketplace />
      <Benefits />
      <CallToAction />
      <footer className="self-stretch flex flex-col items-start justify-start gap-[35px] max-w-full text-left text-[12px] text-teal font-poppins mq750:gap-[17px]">
        <div className="self-stretch h-[138px] bg-gainsboro overflow-hidden shrink-0 flex flex-col items-end justify-start pt-[13.9px] pb-[11.1px] pr-px pl-0 box-border gap-[30.1px] max-w-full mq750:h-auto mq750:gap-[15px]">
          <FooterLinks />
          <Legal />
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <b className="relative">
            Copyright © 2024 Emple Suk All rights reserved
          </b>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
