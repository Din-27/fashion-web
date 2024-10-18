import React from "react";
import FormLogin from "./FormLogin";
import ImageSecure from "../../../src/assets/image_security.png";

export default function Login() {
  return (
    <div className="grid min-h-screen grid-cols-2 items-center">
      <div className="flex items-center w-full h-full bg-[#F4F9FF]">
        <img className="mx-auto" src={ImageSecure.src} alt="" />
      </div>
      <div className="mx-auto w-full">
        <FormLogin />
      </div>
    </div>
  );
}
