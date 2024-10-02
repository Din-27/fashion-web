import FooterNavWrapper from "../src/components/Wrapper/FooterNavWrapper";
import "./global.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <FooterNavWrapper>{children}</FooterNavWrapper>
    </html>
  );
}
