import { BrowserRouter, Routes, Route } from "react-router-dom";
import RankingPage from "./pages/RankingPage";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import UserInfoProvider from "./contexts/UserInfoContext";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <UserInfoProvider>
      <AppStyle>
        <BrowserRouter>
          <Header />
          <Sidebar />
          <Routes>
            <Route element={<RankingPage />} path="/" />
            <Route element={<SignUpPage />} path="/sign-up" />
            <Route element={<SignInPage />} path="/sign-in" />
            <Route element={<HomePage />} path="/home" />
          </Routes>
        </BrowserRouter>
      </AppStyle>
    </UserInfoProvider>
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
