import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Producto from "./routes/producto";
import Detalles from "./routes/detalles";
import Notfound from "./routes/notfound";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <div className="container">
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="producto" element={<Producto />} />
          <Route path="producto/:id" element={<Detalles />}/>

          <Route path="*" element={<Notfound />} />
        
        </Route>
      </Routes>
    </div>
  </BrowserRouter>
);