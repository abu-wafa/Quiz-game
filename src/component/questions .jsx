import "./Questions.css";
import { useGlobalContext } from "../context.jsx";
import right from "../../assets/svg/right.svg";
import wrong from "../../assets/svg/wrong.svg";
export default function Questions() {
  const {
    data,
    allOptions,
    UpdateQuistion,
    currentQuestion,
    decodeHtml,
    navigateQuestion,
  } = useGlobalContext();

  // function to decode the otptions To html entities

  return (
    <>
      <div className="game shadow-[0_35px_35px_rgba(0,0,0,0.25)] bg-[#343964] rounded-[10px] h-full row-start-3 row-end-9 ">
        <div className=" flex  items-center justify-center h-full">
          <div className=" w-[70%] h-[80%] rounded-[10px]">
            <div className="flex flex-col h-full w-full text-center">
              <div className=" flex flex-row flex-1 gap-[5px] w-full justify-center md:justify-between md:flex-nowrap flex-wrap items-center">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => (
                  <div
                    key={item}
                    onClick={() => navigateQuestion(i)}
                    className={` ${
                      i <= currentQuestion ? "gradiant" : ""
                    } lg:w-[50px] w-[40px] lg:h-[50px] h-[40px] cursor-pointer font-bold lg:leading-[50px] leading-[40px] rounded-[50%] bg-[#393F6E]`}
                  >
                    {item}s
                  </div>
                ))}
              </div>
              <div className="  w-full flex-2">
                <div className="   text-lg flex flex-col h-full w-full items-center justify-center">
                  <div>
                    {!data?.allQuestions.length == 0
                      ? decodeHtml(data?.allQuestions[currentQuestion])
                      : "Please try to refresh the page"}
                  </div>
                </div>
              </div>
              <div className="  w-full flex-4">
                <div className="grid grid-cols-2 gap-5 h-full w-full content-center ">
                  {!data.options.length == 0 ? (
                    allOptions?.map((item, i) => (
                      <button
                        key={i}
                        className="bg-[#393F6E] p-4.5 rounded-xl cursor-pointer
 capitalize font-bold text-lg   focus:bg-gradient-to-r hover:bg-gradient-to-r from-[#E65895] to-[#BC6BE8]"
                        onClick={(e) => UpdateQuistion(e)}
                      >
                        <div className="flex flex-row justify-center items-center gap-2">
                          {decodeHtml(item)}
                          <span>
                            <img
                              src={right}
                              className="right hidden"
                              alt="correct"
                            />
                            <img
                              src={wrong}
                              className="wrong hidden"
                              alt="wrong"
                            />
                          </span>
                        </div>
                      </button>
                    ))
                  ) : (
                    <>
                      <button className="bg-[#393F6E]  p-4.5 rounded-xl">
                        {" "}
                        no data yet
                      </button>
                      <button className="bg-[#393F6E]  p-4.5 rounded-xl">
                        {" "}
                        no data yet
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
