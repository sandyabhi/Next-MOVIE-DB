type Props = {
  text: string;
  className?: string;
};

const Pill = ({ className, text }: Props) => (
  <div
    className={`bg-gradient-to-tr from-violet-800 to-blue-800 text-white text-sm font-bold px-2 py-1 m-2 rounded-tr-3xl rounded-bl-3xl inline-block ${className}`}
  >
    <p className="px-3"> {text}</p>
  </div>
);

export default Pill;
