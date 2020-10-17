import Styled from "styled-components";
import HomeBackground from "../assets/home-background.jpg";
import BorderBackground from "../assets/sand-border.png";
import Line from "../assets/line.png";
import Needle from "../assets/needle.png";
import Paper from "../assets/paper.png";
import BorderBottomBackground from "../assets/sand-border-bottom.png";
import WoodBackground from "../assets/wood.jpeg";
import Footer from "../assets/footer.png";


export const PageWrapper = Styled.div`
`;

export const MainSection = Styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 100vh;
    background-image: url(${HomeBackground});
    background-size: cover; 
    object-fit: fit;
`;

export const Navbar = Styled.div`
    display: flex;
    margin: 0 auto;
`;

export const Link = Styled.a`
    color: white;
    margin: 2rem;
    font-size: 1.2rem;
    font-weight: bold;

    :hover {
        cursor: pointer;
    }
`;

export const PageTitle = Styled.h3`
    display: flex; 
    margin-left: 10%;
    color: white;
    font-size: 4.5rem;
    text-align: left;
    font-family: 'Marck Script', cursive;
    font-weight: 500;
`;

export const BorderImage = Styled.div`
    background-image: url(${BorderBackground});
    height: 20rem;
    margin-top: -11.5rem;
`;

export const AboutMeSection = Styled.div`
    height: 100vh;
    background-color: #f5eddb;
`;

export const LineBreak = Styled.div`
    background-image: url(${Line});
    background-color: #f5eddb;
    height: 2rem;
`;

export const NeedleImage = Styled.div`
    background-image: url(${Needle});
    background-color:#f5eddb;
    height: 12rem;
    width: 13rem;
`;

export const NeedleWrapper = Styled.div`
    background-color:#f5eddb;
    display: flex;
    justify-content: flex-end;
`;

export const ProductSection = Styled.div`
    height: 100vh;
    background-color:#f5eddb;
`;

export const ProductCard = Styled.div`
    background-image: url(${Paper});
    margin: 0 auto;
    height: 44rem;
    background-repeat: no-repeat;
    background-size: contain
`;

export const BottomBorder = Styled.div`
    background-image: url(${BorderBottomBackground});
    background-repeat: no-repeat;
    background-size: cover;
    height: 20rem;
    transform: rotate(180deg);
`;

export const ContactSection = Styled.div`
    height: 100vh;
    background-image: url(${WoodBackground});
    margin-top: -17rem;
`;

export const FooterSection = Styled.div`
    background-image: url(${Footer});
    height: 20rem;
    margin-top: -13rem;
`;


