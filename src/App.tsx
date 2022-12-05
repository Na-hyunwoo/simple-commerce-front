import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProductListContainer from "./containers/ProductListContainer";
import FrameWork from "./frameworks/Framework";
import { RecoilRoot } from "recoil";

function App() {

  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<FrameWork />}>
            <Route path = "" element={<ProductListContainer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
