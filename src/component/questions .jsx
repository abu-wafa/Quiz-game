import React from "react";

export default function Questions() {
  return (
    <>
      <div className="game shadow-[0_35px_35px_rgba(0,0,0,0.25)] bg-[#393F6E] rounded-[10px] h-full row-start-3 row-end-9 ">
        <div className=" flex  items-center justify-center h-full">
          <div className="bg-[#ad1a1acc] w-[70%] h-[80%] rounded-[10px]">
            <div className="flex flex-col h-full w-full">
              <div className=" bg-amber-300 w-full h-[20%]"></div>
              <div className=" bg-red-400 w-full h-[30%]"></div>
              <div className=" bg-blue-900 w-fullh-[50%]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
