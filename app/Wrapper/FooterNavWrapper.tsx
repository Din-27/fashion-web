"use client";
import React from "react";
import { Footer } from "../../src/components";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
const ReduxProvider = dynamic(() => import("../../src/store/redux-provider"), {
  ssr: false,
});
export default function FooterNavWrapper({ children }) {
  const pathname = usePathname();
  const condAuth = pathname.includes("auth");
  return (
    <ReduxProvider>
      {children}
      {!condAuth && <Footer />}
    </ReduxProvider>
  );
}
