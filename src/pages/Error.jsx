import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="lost-page absolute left-0 top-0 w-full h-full">
      <div className="flex flex-col items-center justify-center h-screen  w-full  bg-gradient-to-r from-[#E65895] to-[#BC6BE8] text-white">
        <h1 className="font-bold text-6xl mb-0.5">404</h1>
        <h2 className="font-bold text-3xl">Page Not Found</h2>
        <div className="margin-auto text-center mt-4">
          <Link
            to="/"
            className="bg-[#393F6E] p-1.5 rounded hover:bg-[#2B2E4A] text-white font-semibold"
          >
            Do you want to PLay
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
