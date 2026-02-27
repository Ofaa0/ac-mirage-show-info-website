import ListItems from "@/components/ListItems";
import { partnersList, platformsList, studiosList } from "@/data";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full py-10 bg-[#244154] flex justify-center items-center">
      <div className="container w-full px-4 lg:px-0">
        <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-0 place-items-center text-center">
          <Image
            src={"/footerLogo.png"}
            width={300}
            height={300}
            alt="footer logo"
          />
          <ListItems headList={"studios"} list={studiosList} />
          <ListItems headList={"platforms"} list={platformsList} />
          <ListItems headList={"partners"} list={partnersList} />
        </div>
        <div className="flex justify-end items-center gap-4 py-10">
          <Image
            src={"/esrb-footer.avif"}
            width={100}
            height={100}
            alt="footer logo"
          />
          <Image
            src={"/acm-esrb.avif"}
            width={300}
            height={100}
            alt="footer logo"
          />
        </div>
        <p className="text-sm text-center">
          © 2022 Ubisoft Entertainment. All Rights Reserved. Assassin’s Creed,
          Ubisoft, and the Ubisoft logo are registered or unregistered <br />
          trademarks of Ubisoft Entertainment in the US and/or other countries.
        </p>
      </div>
    </div>
  );
};

export default Footer;
