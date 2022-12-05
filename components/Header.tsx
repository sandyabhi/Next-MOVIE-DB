import Link from "next/link";
import Image from "next/image";
import SearchInput from "./SearchInput";

type Props = {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const Header = ({ setQuery }: Props) => (
  <div className="stick flex top-0 z-40 w-full h-20 bg-gradient-to-r from-slate-900 to-black">
    <div className="flex justify-between w-full h-full max-w-7xl m-auto items-center px-4">
      <Link href="/">
        <div className="flex items-center cursor-pointer">
          <div className="invisible flex items-center justify-center md:visible">
            <Image
              height="42"
              width="42"
              src="/rmdb-logo-small.svg"
              alt="rmdb-logo-small"
            />
            <p className="p-4 text-center font-bold text-4xl ">MOVIE-DB</p>
          </div>
          <div className="absolute md:invisible pt-2">
            <Image
              height="42"
              width="42"
              src="/rmdb-logo-small.svg"
              alt="rmdb-logo-small"
            />
          </div>
        </div>
      </Link>
      {setQuery ? (
        <div className="relative flex items-center">
          <SearchInput setQuery={setQuery} />
        </div>
      ) : (
        <></>
      )}
    </div>
  </div>
);

export default Header;
