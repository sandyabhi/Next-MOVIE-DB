import Image from "next/image";

type Props = {
  imgUrl: string;
};

const Thumb = ({ imgUrl }: Props) => (
  <Image
    placeholder="blur"
    blurDataURL="/placeholder.jpg"
    className="rounded-tl-3xl rounded-br-[28px]"
    layout="fill"
    objectFit="cover"
    src={imgUrl}
    alt="thumb"
  />
);

export default Thumb;
