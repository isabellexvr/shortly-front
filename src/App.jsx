import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RankingPage from "./pages/RankingPage";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import UserInfoProvider from "./contexts/UserInfoContext";
import HomePage from "./pages/User/HomePage";
import useToken from "./services/hooks/useToken";
import UserRoutes from "./pages/User";

function App() {
  return (
    <UserInfoProvider>
      <AppStyle>
        <BrowserRouter>
          <Header />
          <Sidebar />
          <Routes>
            <Route element={<RankingPage />} path="/ranking" />
            <Route element={<SignUpPage />} path="/sign-up" />
            <Route element={<SignInPage />} path="/sign-in" />
            <Route
              path="/user"
              element={
                <AuthorizedRoute>
                  <UserRoutes />
                </AuthorizedRoute>
              }
            >
              <Route element={<HomePage />} path="home" />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppStyle>
    </UserInfoProvider>
  );
}

export default App;

function AuthorizedRoute({ children }) {
  const token = useToken();

  if (!token) {
    return <Navigate to="/sign-in" />;
  }

  return <>{children}</>;
}

const AppStyle = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
