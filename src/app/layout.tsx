import type { Metadata } from "next";
import MUIThemeProvider from "@/providers/ThemeProvider";
import CacheProvider from "@/providers/CacheProvider";
import NotiStackProvider from "@/providers/NotiStackProvider";
import Footer from "@/components/Footer";
import TopLoader from "@/providers/TopLoader";
import { appConfig } from "@/appConfig";

import "react-international-phone/style.css";
import "../styles/globals.scss";

export const metadata: Metadata = {
  openGraph: {
    title: "Talente",
    description:
      "We integrate AI and NLP to streamline career and HR management for professionals and corporate teams on a single platform, accessible via iOS and Android apps.",
  },
  title: "Talente",
  description:
    "We integrate AI and NLP to streamline career and HR management for professionals and corporate teams on a single platform, accessible via iOS and Android apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      {/* <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/46356167.js"></script> */}
      <body>
        {appConfig.topLoader.show && <TopLoader />}
        <CacheProvider>
          <MUIThemeProvider>
            <NotiStackProvider>
              {children}
              <Footer />
            </NotiStackProvider>
          </MUIThemeProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
