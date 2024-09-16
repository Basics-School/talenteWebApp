import React from "react";
import Box from "@mui/material/Box";
import Container from "@/components/Container";
import Image from "next/image";
import CommonTextArea from "@/common/CommonTextArea";
import MobileBannerImage from "@/assets/images/mobile-banner.png";
import PlayStoreImage from "@/assets/images/playStore.png";
import AppStoreImage from "@/assets/images/appStore.png";
import azureImage from "@/assets/images/azure.png";
import awsImage from "@/assets/images/aws.png";

const ComingSoonSection = () => {
  return (
    <Box className="relative pb-16 md:pb-20 lg:pb-32">
      <Container>
        <Box className="flex relative flex-col mt-10 justify-center xl:!px-0 tab:!px-8 max-w-[1280px] mx-auto">
          <Box className="relative flex md:!flex-row !flex-col-reverse items-center pb-0 md:pb-10 !w-full !justify-center lg:!gap-20 md:!gap-10 !gap-6 md:!px-8">
            <Box className="relative overflow-hidden my-10 mx-auto">
              <Image
                draggable="false"
                src={MobileBannerImage}
                alt="Customer Support Image"
                className="relative z-10"
              />
            </Box>
            <Box>
              <CommonTextArea
                heading="COMING SOON"
                content="Connect with Tasha wherever you are. Whether you’re navigating career decisions, managing HR tasks, or seeking advice, Tasha is always by your side. The Tasha app empowers you to take your career and HR management on the go, putting AI-driven insights and support right in your pocket."
              />
              <div className="max-w-md grid grid-cols-2 sm:gap-6 gap-4 lg:mt-20 sm:mt-6 mt-4">
                <a href="">
                  <Image
                    className="h-14 object-cover"
                    draggable="false"
                    src={PlayStoreImage}
                    alt="Google play store icon"
                  />
                </a>
                <a href="">
                  <Image
                    className="h-14 object-cover"
                    draggable="false"
                    src={AppStoreImage}
                    alt="Google play store icon"
                  />
                </a>
                <a href="">
                  <Image
                    className="h-16 object-cover"
                    draggable="false"
                    src={azureImage}
                    alt="Azure icon"
                  />
                </a>
                <a href="">
                  <Image
                    className="h-16 object-cover"
                    draggable="false"
                    src={awsImage}
                    alt="AWS icon"
                  />
                </a>
              </div>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default ComingSoonSection;
