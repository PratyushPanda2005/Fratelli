import Image from "next/image";
import React from "react";
import { mountain_artline } from "../config";

const Mountain = () => {
  return (
    <Image
      src={mountain_artline}
      width={400}
      height={400}
      alt="Mountain Line Art"
      className="w-full bg-none"
    />
  );
};

export default Mountain;
