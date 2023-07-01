import styled from "styled-components";
import logoFull from "../../assets/logo-full.png"
import bermuda from "../../assets/bermuda.png"
import {colors} from "../../assets/colors"
import pocket from "../../assets/pocket.png"

export default function WelcomePage(){
    return (
        <PageContainer>
            <ShortlyLogo src={pocket} alt="logo" />
            Encurtador de Links
        </PageContainer>
    )
}

const PageContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding-top: 100px;
box-sizing: border-box;
position: relative;
width: 90vw;
    .slogan{
        font-size: 6vw;
        font-weight: 700;
        >h1{
            color: ${colors.lightBlue};
        }
    }
`

const BermudaLogo = styled.img`
    width: 14vw;

`

const ShortlyLogo = styled.img`
    opacity: 0.5;
    position: absolute;
    right: 0;
    z-index: -1;

`