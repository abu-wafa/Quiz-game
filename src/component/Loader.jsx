import "./Loader.css";
const Loader = () => {
  return (
    <>
      <section className=" bg-[url(./assets/img/bg.jpg)] bg-cover left-[0px] top-[0px] absolute w-full h-full">
        <div className=" h-full w-full flex  justify-center items-center">
          <div className="spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Loader;
