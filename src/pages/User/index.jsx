import { Outlet } from "react-router-dom";
import styled from "styled-components";

export default function UserRoutes(){
    return (
        <Container>
            <Outlet/>
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
    padding-top: 100px;
    box-sizing: border-box;
`