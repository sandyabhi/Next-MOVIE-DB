import Image from "next/image";
import { calcTime, convertMoney } from "../helpers";
import Pill from "./Pill";
import { Crew } from "../api/types";

type Props = {
  thumbUrl: string;
  backgroundImgUrl: string;
  title: string;
  year: string;
  summary: string;
  rating: number;
  directors: Crew[];
  time: number;
  budget: number;
  revenue: number;
};

const MovieInfo = ({
  thumbUrl,
  backgroundImgUrl,
  title,
  year,
  summary,
  rating,
  directors,
  time,
  budget,
  revenue,
}: Props) => (
  <div className="relative w-full h-auto p-4">
    <div className="relative h-full min-h-128 flex flex-col md:flex-row max-w-7xl p-4 m-auto z-10 rounded-x bg-opacity-90 from-transparent to-zinc-900 bg-gradient-to-r">
      <div className="relative w-full h-96 md:h-auto md:w-1/3">
        <Image
          placeholder="blur"
          blurDataURL="/placeholder.jpg"
          className="rounded-2xl"
          layout="fill"
          objectFit="cover"
          src={thumbUrl}
          alt="thumb"
        />
        <div className="absolute top-4 left-4 w-7 h-7 rounded-full bg-white text-center font-bold">
          {Math.round(rating * 10) / 10}
        </div>
      </div>
      <div className="text-white px-0 py-4 md:py-0 text-center md:text-left md:px-8 w-full md:w-2/3">
        <h2 className="text-2xl md:text-4xl font-bold pb-4">
          {title} ({year})
        </h2>
        <h3 className="text-lg font-bold">Summary</h3>
        <p className="mb-8 text-sm md:text-lg">{summary}</p>
        <div>
          <div>
            <h3 className="text-lg font-bold">
              Director{directors.length > 1 ? "s" : ""}
            </h3>
            <div>
              {directors.map((director) => (
                <p key={director.credit_id}>{director.name}</p>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-bold">Movie data</h3>
            <Pill className="ml-0" text={`Running time: ${calcTime(time)}`} />
            <Pill text={`Budget: ${convertMoney(budget)}`} />
            <Pill text={`Revenue: ${convertMoney(revenue)}`} />
          </div>
        </div>
      </div>
    </div>
    <Image
      priority
      placeholder="blur"
      blurDataURL="/placeholder.jpg"
      objectFit="cover"
      objectPosition="center"
      layout="fill"
      src={backgroundImgUrl}
      alt="thumb"
    />
  </div>
);

export default MovieInfo;
