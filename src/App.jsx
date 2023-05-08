import { BrowserRouter, Routes, Route } from "react-router-dom";
import RankingPage from "./pages/RankingPage.js"
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";

function App() {
  return (
    <AppStyle>
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
          <Route element={<RankingPage />} path="/" />
        </Routes>
      </BrowserRouter>
    </AppStyle>
  );
}

export default App;

const AppStyle = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
