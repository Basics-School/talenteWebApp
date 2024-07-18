import NextTopLoader from "@/lib/NextTopLoader";

const TopLoader = () => {
  return (
    <NextTopLoader
      color="var(--button-shadow) !important"
      initialPosition={0.08}
      crawlSpeed={200}
      height={3}
      crawl={true}
      showSpinner={true}
      easing="ease"
      speed={200}
      zIndex="var(--toploader-z-index)"
      showAtBottom={false}
    />
  );
};

export default TopLoader;
