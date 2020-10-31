import Styled, { css } from "styled-components";
import HomeBackground from "../assets/home-background.jpg";
import BorderBackground from "../assets/sand-border.png";
import Line from "../assets/line.png";
import Needle from "../assets/needle.svg";
import Paper from "../assets/paper.png";
import BorderBottomBackground from "../assets/sand-border-bottom.png";
import WoodBackground from "../assets/wood.jpeg";
import Footer from "../assets/footer.png";
import AboutPhotoPortrait from "../assets/about_photo_1.png";
import AboutPhotoPortrait2 from "../assets/about_photo_2.png";
import AboutPhotoPortrait3 from "../assets/about_photo_3.png";
import AboutPhotoPortrait4 from "../assets/about_photo_4.png";
import Contact from "../assets//contact-image.jpg";
import Logo from "../assets/logo2.svg";

export const PageWrapper = Styled.div`
`;

export const logo = css`
    background-image: url(${Logo});
    width: 8rem;
    height: 8rem;
    background-repeat: no-repeat;  
`;

export const HeaderPageLogo = Styled.div`
    background-image: url(${Logo});
    margin: 1rem 2rem;
    ${logo}
`;

export const FooterPageLogo = Styled.div`
    background-image: url(${Logo});
    margin-top: 13rem;
    margin-left: 2rem;
    ${logo}
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
    justify-content: space-between;
`;

export const Link = Styled.a`
    color: #F9F2E2;
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
    margin-top: -2rem;
    color:  #F9F2E2;;
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
    height: 12rem;
    width: 8rem;
    background-repeat: no-repeat;
    background-size: contain
`;

export const NeedleWrapper = Styled.div`
    background-color:#f5eddb;
    display: flex;
    justify-content: flex-end;
`;

export const ProductSection = Styled.div`
    height: 100vh;
    background-color: #f5eddb;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ProductSoon = Styled.div`
    font-size: 4rem;
`;

export const ProductCard = Styled.div`
    background-image: url(${Paper});
    margin: 0 auto;
    height: 100vh;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const AboutUsTitle = Styled.div`
    font-size: 4.5rem;
    font-family: 'Lobster', cursive;
    text-align: left;
    color: #4D342F;
    margin-left: 10%;
`;

export const FirstContainer = Styled.div`
    display: flex;
    margin-top: 5rem;
`;

export const AboutUsText = Styled.span`
    text-align: left;
    max-width: 30rem;
    color: #594E56;
    letter-spacing: 0.5px;
    line-height: 1.5rem;
`;

export const Container = Styled.div`
    max-width: 1246px;
    margin: 0 auto;
`;

export const TextSpan = Styled.div`
    margin-top: 1rem;
`;

export const ImagesContainer = Styled.div`
    display: flex;
    margin-top: 3rem;
`;

export const ImagePortrait = Styled.div`
    background-image: url(${AboutPhotoPortrait});
    background-repeat: no-repeat;
    background-size: cover;
    height: 14rem;
    width: 18rem;
    margin-top: -5rem;
    margin-left: 3rem;
`;

export const ImagePortrait2 = Styled.div`
    background-image: url(${AboutPhotoPortrait2});
    background-repeat: no-repeat;
    background-size: cover;
    height: 20rem;
    width: 21rem;
    margin-left: -2rem;
    transform: rotate(20deg);

`;

export const ImagePortrait3 = Styled.div`
    background-image: url(${AboutPhotoPortrait4});
    background-repeat: no-repeat;
    background-size: cover;
    height: 17rem;
    width: 19em;
    margin-top: -5rem;
    margin-left: -2rem;
    transform: rotate(15deg);

`;

export const ImagePortrait4 = Styled.div`
    background-image: url(${AboutPhotoPortrait3});
    background-repeat: no-repeat;
    background-size: cover;
    height: 14rem;
    width: 18rem;
    margin-left: -2rem;
    margin-right: 5rem;
    margin-top: -8rem;
    transform: rotate(5deg);
`;

export const ContactTitle = Styled.div`
    font-size: 4rem;
    text-align: left;
    color: white;
    font-family: 'Lobster', cursive;
    padding-top: 11rem;
`;

export const ContactFormContainer = Styled.div`
    display: flex;
    justify-content: center;
`;

export const ContactForm = Styled.div`
    height: 28rem;
    width: 25rem;
    background-color: rgba(77, 52, 47, 0.63);
    border-radius: 0.5rem;
`;

export const ContactImage = Styled.div`
    background-image: url(${Contact});
    background-repeat: no-repeat;
    background-size: cover;
    height: 14rem;
    width: 18rem;
    margin: 1rem auto;

`;

export const ContactDataContaier = Styled.div`
    display: flex;
    flex-direction: column;  
`;

export const ContactDataWrapper = Styled.div`
    display: flex;
    margin-left: 2rem;
    margin-top: 1rem;
`;

export const DataText = Styled.div`
    color: white;
    margin-left:1rem;
    text-align: left;
    font-size: 1.1rem;
    font-weight: 500;
`;

export const DataIcon = Styled.i`
    color: white;
    font-size:48px;
`;

export const FooterTitle = Styled.span`
    color: #ffffffb8;
    margin-top: 11rem;
`;

export const LinksWrapper = Styled.div`
    display: flex;
    margin-left: -8rem;
`;

export const SocialMediaWrapper = Styled.div`
    display: flex;
    margin-top: 11rem;
    margin-right: 5rem;
`;



