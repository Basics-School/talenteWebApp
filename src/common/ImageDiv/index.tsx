import Image, { StaticImageData } from "next/image";

type PropsType = {
  ImgSrc: StaticImageData;
  ImgAlt: string;
};

export default function ImageDiv({ ImgSrc, ImgAlt }: PropsType) {
  const content = (
    <div className="md:w-80 w-60 md:h-80 h-60 md:border-[1.6rem] sm:border-[1rem] border-8 border-[#ffb54d] rounded-full overflow-hidden sm:my-10 my-5 mx-auot">
      <Image draggable="false" src={ImgSrc} alt={ImgAlt} />
    </div>
  );

  return content;
}
