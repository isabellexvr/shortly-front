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
    
`