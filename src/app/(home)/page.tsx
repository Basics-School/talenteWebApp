import InfoSection from "@/components/InfoSection";
import Image from "next/image";
import Globe from "@/assets/svg/Globe.svg";
import BlueCircle from "@/assets/svg/BlueCircle.svg";
import Box from "@mui/material/Box";
import CareerSupportSection from "@/components/CareerSupportSection";
import CareerGuideSection from "@/components/CareerGuideSection";
import Decoration from "@/assets/svg/Decoration.svg";
import ExperienceSection from "@/components/ExperienceSection";

export default function Home() {
  return (
    <Box className="w-full flex flex-col">
      <Box
        className="relative flex flex-col min-h-screen w-full overflow-clip"
        sx={{
          background:
            "linear-gradient(to bottom, var(--black-color), var(--bg-gradient-color)) !important",
        }}
      >
        <Box className="xl:!mt-44 !mt-40 flex-1 mb-[60px] flex items-center">
          <InfoSection />
        </Box>
        <Box className="absolute bottom-6 -left-8 md:!-left-7 lg-left-16 spinCircle z-10">
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
            className="sm:!w-[310px] !w-[220px] spinGlobe"
          />
        </Box>
      </Box>

      <Box style={{ minHeight: "500px", background: "var(--section-color)" }}>
        <CareerSupportSection />
      </Box>
      <Box style={{ background: "var(--section-color)" }}>
        <Image
          src={Decoration}
          alt="Decoration Image"
          className="!mx-auto sm:-mt-[-4rem] xl:!w-[160px] xl:!h-[55px] lg:!w-[120px] !w-[90px]"
        />
      </Box>
      <Box style={{ minHeight: "480px", background: "var(--section-color)" }}>
        <CareerGuideSection />
      </Box>
      <ExperienceSection />
    </Box>
  );
}
