import styled from "styled-components";

export default function Modal(message){
    return(
        <ModalBackground>
            
        </ModalBackground>
    )
}

const ModalBackground = styled.div`
    
    height: 100vh;
    width: 100vw;
    position: fixed;
    background-color: black;
    z-index: 5;
    opacity: 0.5;
    top: 0;
    left: 0;
`

