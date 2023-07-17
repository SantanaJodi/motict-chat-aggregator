import { GlobalContext } from "@/src/hooks/global-context";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Motict",
  description: "Powerful Chat Agregator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <GlobalContext>{children}</GlobalContext>
      </body>
    </html>
  );
}
