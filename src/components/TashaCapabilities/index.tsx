import React from "react";
import Container from "../Container";
import Image from "next/image";
import { Typography } from "@mui/material";
import ComingSoonSection from "../ComingSoonSection";
import Button from "../Button";

const TashaCapabilities = () => {
  const data = [
    {
      img: "/images/tasha/tasha-card-1.png",
      title: (
        <>
          HR Process
          <br />
          Automation
        </>
      ),
      text: "Streamline your HR operations with Tasha’s advanced automation capabilities, from onboarding and performance management to employee engagement and retention.",
    },
    {
      img: "/images/tasha/tasha-card-2.png",
      title: (
        <>
          Advanced
          <br />
          Analytics
        </>
      ),
      text: "Tasha delivers actionable insights through data-driven analysis, helping HR teams make informed decisions and optimize workforce strategies.",
    },
    {
      img: "/images/tasha/tasha-card-3.png",
      title: (
        <>
          Career Pathing
          <br />
          and Development
        </>
      ),
      text: "Tasha provides personalized career guidance, helping you navigate your professional journey with tailored recommendations and development plans.",
    },
    {
      img: "/images/tasha/tasha-card-4.png",
      title: (
        <>
          Personalized
          <br />
          Support
        </>
      ),
      text: "Tasha offers 24/7 support to employees, answering HR-related questions, assisting with benefits, and providing guidance on company policies in multiple languages.",
    },
  ];
  return (
    <>
      <section className="pt-16 md:pt-20 lg:pt-32">
        <Container>
          <h2 className="Montserrat-Bold text-center text-white mb-3">Tasha&apos;s Capabilities</h2>
          <Typography className="Montserrat-Regular text-center !mx-auto md:mb-20 mb-12 !text-[--white-text] xl:text-[20px] lg:text-[18px] text-[16px] max-w-auto md:max-w-[1000px] ">
            We leverage AI to deliver comprehensive Career and HR Management solutions, seamlessly
            integrating advanced analytics with personalized employee and organizational development
            strategies.
          </Typography>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {data.map(({ img, text, title }, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="relative mb-8 aspect-square w-[70px] md:w-[100px]">
                  <Image src={img} alt="icon" fill loading="lazy" className="object-contain" />
                </div>
                <h4 className="Montserrat-Bold text-white mb-5 text-center">{title}</h4>
                <p className="text-xl text-white Spartan-Regular text-center leading-tight">
                  {text}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center sm:mt-20 mt-9">
            <Button
              openDialog
              className="bg-cyan-600 text-center font-bold py-2 sm:px-6 px-4 md:text-xl text-base rounded-full border-none"
            >
              Create Account
            </Button>
          </div>
        </Container>
      </section>
      <ComingSoonSection />
    </>
  );
};

export default TashaCapabilities;
