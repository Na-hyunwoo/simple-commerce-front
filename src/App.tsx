import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProductListPage from "./pages/ProductListPage";
import FrameWork from "./frameworks/Framework";
import ProductDetailPage from "./pages/ProductDetailPage";
import { RecoilRoot } from "recoil";
import CartPage from "./pages/CartPage";
import { QueryClientProvider, QueryClient} from "react-query";

function App() {

  const queryClient = new QueryClient();

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FrameWork />}>
              <Route path="list" element={<ProductListPage />} />
              <Route path="products/:productId" element={<ProductDetailPage />} />
              <Route path="cart" element={<CartPage />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
