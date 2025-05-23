import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Homepage, About, Contacts, Photos, Styles } from "./pages";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="photos" element={<Photos />} />
          <Route path="styles" element={<Styles />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
