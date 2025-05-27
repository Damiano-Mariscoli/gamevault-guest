import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import "./App.css";
import DefaultLayout from "./layout/DefaulLayout";
import { GlobalProvider } from "./context/GlobalContext";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <div className="heigth-full">
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/detail/:id" element={<Detail />} />
            </Route>
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
