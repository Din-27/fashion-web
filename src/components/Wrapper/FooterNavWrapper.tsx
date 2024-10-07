import React from "react";
import { Footer } from "../../components";
import dynamic from "next/dynamic";
const ReduxProvider = dynamic(() => import("../../store/redux-provider"), {
  ssr: false,
});
export default function FooterNavWrapper({ children }) {
  return (
    <ReduxProvider>
      {children}
      <Footer />
    </ReduxProvider>
  );
}
