import { Box, Container } from "@mui/material";
import React from "react";
const CoreValuesSection = () => {
  return (
    <Box className={"relative pb-10 overflow-hidden"}>
      <Container>
        <Box className="flex flex-col justify-center items-center !pt-16 max-w-[1280px] mx-auto">
          <h2 className="Spartan-Bold xl:!text-[2.5rem] text-white lg:!text-3xl !text-2xl !mb-2 text-center uppercase">
            Our Core Values
          </h2>
          <Box className="flex flex-col lg:flex-row w-full gap-[30px] mt-10">
            <Box className="flex flex-col gap-[24px] w-full lg:w-[50%]">
              <Box className="bg-orange w-full lg:h-[400px] flex lg:justify-center items-center p-10">
                <Box>
                  <h4 className="text-2xl Spartan-Bold mb-2">Employee-Centricity</h4>
                  <p className="">
                    We empower employees at every stage of their career journey, whether they are
                    employed or looking for their next opportunity.
                  </p>
                </Box>
              </Box>
              <Box className="bg-grey w-full lg:h-[200px] flex lg:justify-center items-center p-10">
                <Box>
                  <h4 className="text-2xl Spartan-Bold mb-2">Do More With Less</h4>
                  <p className="">
                    We built a smart platform so we could do more with less. We use innovation
                    thoughtfully to navigate productivity.
                  </p>
                </Box>
              </Box>
            </Box>
            <Box className="flex flex-col gap-[24px] flex-1 w-full lg:w-[50%]">
              <Box className="bg-grey flex-1 w-full lg:h-[350px] lg:flex justify-center items-center p-10 order-2 lg:order-1">
                <Box>
                  <h4 className="text-2xl Spartan-Bold mb-2">Purpose-Driven Disruptors</h4>
                  <p className="">
                    We believe change in traditional HR tactics is necessary. We speak up for what
                    we believe in: Diversity, Equity, and Inclusion fuels our mission.
                  </p>
                </Box>
              </Box>
              <Box className="bg-orange flex-1 w-full lg:h-[250px] flex lg:justify-center items-center p-10 order-1 lg:order-2">
                <Box>
                  <h4 className="text-2xl Spartan-Bold mb-2">Build Meaningful Relationships</h4>
                  <p className="">
                    We are intentional about building lasting connections. We’re redefining the art
                    of professional networking.
                  </p>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="relative flex justify-center items-center w-full lg:h-[200px] p-10 mt-[24px]">
            <img
              src="/images/core-values/values-card-bg.png"
              alt="card-bg"
              className="absolute w-full h-full z-0"
            />
            <div className="z-[1] w-full lg:w-auto">
              <h4 className="text-2xl Spartan-Bold mb-2">Empower Others</h4>
              <p className="max-w-[400px]">
                We set the stage for others to be the best version of themselves: career
                professionals, jobseekers, and everyone in between.
              </p>
            </div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CoreValuesSection;
