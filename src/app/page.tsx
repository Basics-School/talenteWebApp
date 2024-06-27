import InfoSection from "@/components/InfoSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Globe from "@/assets/svg/Globe.svg";
import BlueCircle from "@/assets/svg/BlueCircle.svg";
import Box from "@mui/material/Box";
import CareerSupportSection from "@/components/CareerSupportSection";
import CareerGuideSection from "@/components/CareerGuideSection";
import Decoration from "@/assets/svg/Decoration.svg";

export default function Home() {
  return (
    <Box className="w-full flex flex-col">
      <Box
        className="relative flex flex-col min-h-screen w-full"
        sx={{
          background:
            "linear-gradient(to bottom, var(--black-color), var(--bg-gradient-color)) !important",
        }}
      >
        <Navbar />
        <Box className="xl:!mt-44 lg:!mt-32 !mt-24 flex-1">
          <InfoSection />
        </Box>
        <Box className="absolute bottom-6 lg:!-left-7 -left-16 spinCircle z-10">
          <Image
            draggable="false"
            src={BlueCircle}
            alt="Blue Circle"
            className="xl:!w-[80px] xl:!h-[80px] lg:!w-[67px] lg:!h-[61px] !w-[80px] !h-[80px] spinGlobe"
          />
        </Box>
        <Box className="absolute lg:-bottom-16 md:-bottom-10 -bottom-5 xl:!-right-[8.5rem] lg:-right-20 md:-right-20 -right-20 z-10">
          <Image
            draggable="false"
            src={Globe}
            alt="Globe"
            className="xl:!w-[560px] xl:!h-[500px] lg:!w-[437px] lg:!h-[431px] sm:!w-[390px] sm:!h-[390px] !w-[290px] !h-[290px] spinGlobe"
          />
        </Box>
      </Box>

      <Box style={{ minHeight: "500px", background: "var(--section-color)" }}>
        <CareerSupportSection />
      </Box>
      <Box style={{ background: "var(--section-color)" }}>
        <Image src={Decoration} alt="Decoration Image" className="!mx-auto !w-[160px] !h-[160px]" />
      </Box>
      <Box style={{ minHeight: "450px", background: "var(--section-color)" }}>
        <CareerGuideSection />
      </Box>
    </Box>
  );
}
