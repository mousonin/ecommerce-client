import { FcSearch } from "react-icons/fc";
import { CiBag1, CiHeart, CiUser, CiSearch } from "react-icons/ci";
const index = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center py-4">
          <svg
            width="39"
            height="38"
            viewBox="0 0 39 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect width="38.6667" height="38" fill="url(#pattern0)" />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_3849_1605"
                  transform="scale(0.00862069 0.00877193)"
                />
              </pattern>
              <image
                id="image0_3849_1605"
                width="116"
                height="114"
                xlinkHref="data:image/png;base64,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"
              />
            </defs>
          </svg>
          <p className="w-1/2 text-sm leading-3 font-semibold mx-1">
            Tech Foundation
          </p>
        </div>
        <span className="flex items-center border-solid border rounded-lg border-slate-400 p-1 grow  max-w-4xl">
          <CiSearch className="mx-1" />
          <input
            className="outline-none mx-2 grow"
            placeholder="Search"
            type="text"
          />
        </span>
        <span className="flex items-center justify-around">
          <div className="m-3 flex items-center">
            <CiUser className="mx-1" />
            <p>Log In</p>
          </div>
          <CiHeart className="w-5 h-4 m-3" />
          <CiBag1 className="w-5 h-4 m-3" />
        </span>
      </div>
    </div>
  );
};

export default index;
