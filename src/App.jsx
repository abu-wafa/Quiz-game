import { useState } from "react";
import { FcIdea } from "react-icons/fc";
import "./App.css";

import Questions from "./component/questions ";
function App() {
  return (
    <>
      <section className=" bg-[url(./assets/img/bg.jpg)] bg-cover left-[0px] top-[0px] absolute w-full h-full">
        <div className="wrapper lg:w-[60%] w-[80%] grid   m-auto h-full content-center">
          <div className="grid grid-rows-9">
            <div className="header h-[4.5rem] row-start-2 ">
              <div className="flex flex-row items-center justify-between text-sm">
                <div>
                  <p className="font-bold sm:text-3xl text-sm">Country Quiz</p>
                </div>
                <div className="bg-gradient-to-r from-[#E65895] to-[#BC6BE8] p-1.5 sm:pl-4 sm:pr-4 rounded-r-2xl rounded-l-2xl sm:text-base">
                  <span className="pb-0.5">
                    <FcIdea className="inline mb-1" />
                  </span>
                  <span className="font-[system-ui] font-bold">
                    <span> 1</span>/10 Points
                  </span>
                </div>
              </div>
            </div>
            <Questions />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
