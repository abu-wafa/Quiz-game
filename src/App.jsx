import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Quiz from "./pages/quiz";
import Congratulation from "./pages/congrat";
import Error from "./pages/Error";
function App() {
  return (
    <Router>
      <section className=" bg-[url(./assets/img/bg.jpg)] bg-cover left-[0px] top-[0px] absolute w-full h-full">
        <div className="wrapper lg:w-[60%] w-[80%] grid  m-auto h-full content-center">
          <Routes>
            <Route path="/" element={<Quiz />} />
            <Route path="/congrat" element={<Congratulation />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </section>
    </Router>
  );
}

export default App;
