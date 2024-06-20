import InfoSection from "@/components/InfoSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Globe from "@/assets/svg/Globe.svg";
import BlueCircle from "@/assets/svg/BlueCircle.svg";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <Box className="relative flex flex-col min-h-screen !overflow-hidden">
      <Navbar />
      <Box className="xl:!mt-44 lg:!mt-32 !mt-24 flex-1">
        <InfoSection />
      </Box>
      <Box className="absolute bottom-6 lg:!-left-7 -left-16 spinCircle" style={{ zIndex: -10 }}>
        <Image
          src={BlueCircle}
          alt="Blue Circle"
          className="xl:!w-[80px] xl:!h-[80px] lg:!w-[67px] lg:!h-[61px] !w-[8
          0px] !h-[80px] spinGlobe"
        />
      </Box>
      <Box
        className="absolute lg:-bottom-8 -bottom-5 lg:!-right-20 -right-8"
        style={{ zIndex: -10 }}
      >
        <Image
          src={Globe}
          alt="Globe"
          className="xl:!w-[340px] xl:!h-[340px] lg:!w-[237px] lg:!h-[201px] sm:!w-[150px] sm:!h-[150px]  !w-[110px] !h-[110px] spinGlobe"
        />
      </Box>
    </Box>
  );
}
