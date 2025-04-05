import "./Questions.css";
export default function Questions() {
  return (
    <>
      <div className="game shadow-[0_35px_35px_rgba(0,0,0,0.25)] bg-[#343964] rounded-[10px] h-full row-start-3 row-end-9 ">
        <div className=" flex  items-center justify-center h-full">
          <div className=" w-[70%] h-[80%] rounded-[10px]">
            <div className="flex flex-col h-full w-full">
              <div className=" flex flex-row  gap-[5px] w-full h-[20%] justify-between items-center">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => (
                  <div
                    key={item}
                    className={` ${
                      i < 2 ? "active-ball" : ""
                    } w-[40px] h-[40px] font-bold leading-[40px] rounded-[50%] bg-[#393F6E]`}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className=" bg-red-400 w-full h-[30%]"></div>
              <div className=" bg-blue-900 w-full h-[50%]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
