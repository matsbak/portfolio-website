import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}><div id="content">{children}</div></body>
    </html>
  );
}

export default RootLayout;
