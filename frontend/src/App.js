import  {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Add from "./pages/add";
import Manga from "./pages/manga";
import Update from "./pages/update";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Manga/>}/>
          <Route path ="/add" element={<Add/>}/>
          <Route path ="/update" element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
