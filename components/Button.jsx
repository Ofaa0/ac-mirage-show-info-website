"use client";

import Link from "next/link";
import { RiSendPlaneFill } from "react-icons/ri";

const Button = ({ moreStyle }) => {
  return (
    <Link
      href={"/watch"}
      className={`px-6 py-2 bg-yellow-200 hover:bg-blue-950 hover:text-yellow-200 duration-100 cursor-pointer text-blue-950 font-oct-game italic rounded-2xl flex gap-3 items-center ${moreStyle}`}
    >
      <RiSendPlaneFill className="animate-bounce" />
      watch trailer
    </Link>
  );
};

export default Button;
