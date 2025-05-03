import congrat from "../assets/img/congrats.png";
import { Link } from "react-router-dom";
const Congratulation = () => {
  // get the score from local storage
  const score = JSON.parse(localStorage.getItem("score"));
  return (
    <>
      <div className="congratulation w-full h-full ">
        <div className="w-[80%] md:w-[60%] lg:w-[45%] m-auto">
          <div className="flex flex-col flex-wrap items-center justify-center w-fu h-full rounded-xl bg-[#343964]  ">
            <img src={congrat} alt="congratulation" className=" mt-8 mb-4 " />
            <div className=" text-2xl text-center p-2.5 text-[#E2E4F2]">
              Congratulations! You completed the quiz!
            </div>
            <div className=" mb-8 text-[#E2E4F2]">
              You answer {score}/10 correctly
            </div>
            <Link to="/">
              <button
                onClick={() => localStorage.setItem("score", JSON.stringify(0))}
                className="cursor-pointer bg-[#454a7a] hover:bg-gradient-to-r from-[#E65895] to-[#BC6BE8] text-white font-bold py-4 sm:px-18 px-10 rounded mb-16"
              >
                Play Again
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Congratulation;
