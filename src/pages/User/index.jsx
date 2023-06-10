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
    width: 72%;
    margin-top: 60px;
`