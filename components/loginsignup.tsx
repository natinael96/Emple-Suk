import type { NextPage } from "next";
import { useCallback } from "react";

export type LoginsignupType = {
  className?: string;
};

const Loginsignup: NextPage<LoginsignupType> = ({ className = "" }) => {
  const onLoginsignupContainerClick = useCallback(() => {
    // Please sync "SignUp" to the project
  }, []);

  return (
    <div
      className={`overflow-hidden flex flex-row items-center justify-center py-0 px-[9px] gap-[17px] text-center text-4xl-6 text-lightsalmon font-nunito ${className}`}
    >
      <img
        className="h-[30px] w-[30px] relative overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src="/frame.svg"
      />
      <div
        className="bg-antiquewhite-100 overflow-hidden flex flex-row items-center justify-center py-0 px-2 whitespace-nowrap cursor-pointer"
        onClick={onLoginsignupContainerClick}
      >
        <div className="h-8 relative font-medium inline-block whitespace-nowrap">
          <span>{`Login `}</span>
          <span className="text-black text-2xl-6">
            <span className="tracking-[0.03em]">/</span>
          </span>
          <span className="text-black text-2xl-6">
            <span className="text-mid-7">{` `}</span>
          </span>
          <span className="text-4xl-6 text-darkslategray-100">Signup</span>
        </div>
      </div>
    </div>
  );
};

export default Loginsignup;
