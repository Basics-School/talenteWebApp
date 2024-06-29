import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Decoration from "@/assets/svg/Decoration.svg";

const DecorationComponent = () => {
  return (
    <Box style={{ background: "var(--section-color)" }}>
      <Image
        src={Decoration}
        alt="Decoration Image"
        className="!mx-auto xl:!w-[160px] xl:!h-[160px] lg:!w-[120px] lg:!h-[120px] !w-[90px] !h-[90px] !mb-6"
      />
    </Box>
  );
};

export default DecorationComponent;
