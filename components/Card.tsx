import Thumb from "./Thumb";

type Props = {
  imgUrl: string;
  title: string;
  subtitle?: string;
};

const Card = ({ imgUrl, title, subtitle }: Props) => {
  return (
    <div className="h-80 border-violet-500 rounded-tl-3xl rounded-br-3xl hover:border-2 border-dashed">
      <div className="relative h-full">
        <Thumb imgUrl={imgUrl} />
        <div className="absolute w-full bottom-0 px-4 py-2 rounded-br-3xl bg-zinc-800">
          <h2 className="text-cyan-200 text-center text-sm truncate">
            {title}
          </h2>
          {subtitle && (
            <p className="text-cyan-400 text-center text-xs truncate">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
