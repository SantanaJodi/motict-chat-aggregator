import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Container } from "./components/atoms";

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
        <Container>{children}</Container>
      </body>
    </html>
  );
}
