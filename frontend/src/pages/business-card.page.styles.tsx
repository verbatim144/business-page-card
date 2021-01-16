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
import Torba1 from "../assets/torba1.jpg";

export const PageWrapper = Styled.div`
    background-color: #f5eddb;
`;

export const logo = css`
    background-image: url(${Logo});
    width: 8rem;
    height: 8rem;
    background-repeat: no-repeat;  

    @media(max-width: 874px) {
        min-width: 6rem;
        min-height: 6rem;
    }

    @media(max-width: 600px) {
        min-width: 4rem;
        min-height: 4rem;
    }
`;

export const HeaderPageLogo = Styled.div`
    background-image: url(${Logo});
    display: flex;
    margin: 1rem 2rem;
    ${logo}

    @media(max-width: 500px) {
        margin: 1rem auto 0 auto;
    }
`;

export const FooterPageLogo = Styled.div`
    background-image: url(${Logo});
    margin-top: 2rem;
    margin-left: 2rem;
    ${logo}

    @media(max-width: 600px) {
        margin-left: 0;
        margin-top: 0;
    }
`;
export const MainSection = Styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    min-height: 100vh;
    background-image: url(${HomeBackground});
    background-size: cover; 
    object-fit: fit;
`;

export const Navbar = Styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const Link = Styled.a`
    color: #F9F2E2;
    margin: 2rem;
    font-size: 1.2rem;
    font-weight: bold;
    text-decoration: none;

    :hover {
        cursor: pointer;
    }

    @media(max-width: 874px) {
        font-size: 1rem;
        margin: 2rem 1rem;
    }

    @media(max-width: 406px) {
        margin: 0rem 1rem;
    }
`;

export const PageTitle = Styled.h3`
    display: flex; 
    color:  #F9F2E2;;
    font-size: 4.5rem;
    text-align: left;
    font-family: 'Marck Script', cursive;
    font-weight: 500;
    margin-bottom: 15rem;
    margin-left: 2rem;

    @media(max-width: 1100px) {
        font-size: 3.5rem;
    }

    @media(max-width: 874px) {
        text-align: center;
        font-size: 2.8rem;
        margin: 0 auto 12rem auto;
    }
`;

export const HeaderInProcess = Styled.h1`
font-family: 'Marck Script', cursive;
`;


export const BorderImage = Styled.div`
    background-image: url(${BorderBackground});
    height: 20rem;
    margin-top: -11.5rem;
`;

export const AboutMeSection = Styled.div`
    min-height: 100vh;
    background-color: #f5eddb;
`;

export const LineBreak = Styled.div`
    background-image: url(${Line});
    background-color: #f5eddb;
    height: 2rem;
    margin-top: 2rem;
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
    max-width: 1456px;
    background-color: #f5eddb;
    margin: 0 auto;    
`;

export const ButtonsWrapper = Styled.div`
    display: flex;
    flex-wrap: wrap;

    @media(max-width: 977px) {
        justify-content: center;
    }
`;

export const ProductSoon = Styled.div`
    font-size: 4rem;
`;

export const WidthProps = Styled.div`
    max-width: 1456px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;;
    margin: 0 auto;
    width: 100%;
    min-height: 100vh;
`;

export const Image = Styled.div<{source? : string}>`
    background-image: url(${props => props.source});
    background-repeat: no-repeat;
    min-width: 19rem;
    width: 50%;
    background-size: cover;
    min-height: 11rem;
    max-height: 11rem;
`;

export const ProductCard = Styled.div`
    display: flex;
    flex-wrap: wrap;
    min-width: 36rem;
    overflow: auto;
    min-height: 20rem;
    max-height: 30rem;
    margin-left: 1rem;
    background-color: #F4F1F0;  
    border: 1px solid #4d342f42;
    max-width: 40rem;

    @media(max-width: 977px) {
        min-width: 0;
        margin-left: 0;
        justify-content: center;
    }
`; 

export const BottomBorder = Styled.div`
    background-image: url(${BorderBottomBackground});
    background-repeat: no-repeat;
    background-size: cover;
    height: 20rem;
    transform: rotate(180deg);
`;

export const ContactSection = Styled.div`
    background: linear-gradient(0deg,rgb(0 0 0 / 30%),rgb(0 0 0 / 36%)), url(${WoodBackground});
    margin-top: -17rem;
`;

export const FooterSection = Styled.div`
    background-color: #4D342F;
    height: 10rem;
    display: flex;
    
    justify-content: space-between;
    align-items: center;

    @media(max-width: 600px) {
        justify-content: center;
        flex-wrap: wrap;
        height: 11rem;
    }



`;

export const AboutUsTitle = Styled.div`
    font-size: 4.5rem;
    margin-top: -5rem;
    font-family: 'Lobster', cursive;
    text-align: left;
    color: #4D342F;

    @media(max-width: 1100px) {
        font-size: 3.5rem;
    }

    @media(max-width: 874px) {
        text-align: center;
        font-size: 2.8rem;
    }
`;

export const ProductsTitle = Styled.div`
    font-size: 4.5rem;
    margin-top: -3rem;
    font-family: 'Lobster', cursive;
    text-align: left;
    color: #4D342F;

    @media(max-width: 1100px) {
        font-size: 3.5rem;
    }

    @media(max-width: 874px) {
        text-align: center;
        font-size: 2.8rem;
    }
`;

export const FirstContainer = Styled.div`
    display: flex;
    margin-top: 5rem;
    flex-wrap: wrap;
    justify-content: space-around;;
    @media(max-width: 1050px) {
        margin-top: 4rem;
    }
`;

export const ProductsWrapper = Styled.div`
    margin-top: 2rem;
    max-width: 1456px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
`;

export const SecondContainer = Styled.div`
    display: flex;
    margin-top: 5rem;
    flex-wrap: wrap;
    justify-content: space-around;;

    @media(max-width: 1050px) {
        flex-direction: column-reverse;
        align-items: center;
        margin-top: 3rem;
    }
    
`;

export const AboutUsText = Styled.span`
    text-align: left;
    max-width: 27rem;
    color: #594E56;
    letter-spacing: 0.5px;
    line-height: 1.5rem;
    min-width: 20rem;
    margin-left: 1rem;
    margin-top: 1rem;
    width: 100%;

    @media(max-width: 1050px) {
        max-width: 80%;
        min-width: 0;
    }

    @media(max-width: 700px) {
        margin-top: 0;
    }
    
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
    flex-wrap: wrap;

    @media(max-width: 700px) {
        flex-direction: column;
    }

`;

export const ImagesContainer2 = Styled.div`
    display: flex;
    flex-wrap: wrap;

    @media(max-width: 1050px) {
        gap: 3rem;
    }

    @media(max-width: 700px) {
        flex-direction: column;
    }

`;

export const ImagePortrait = Styled.div`
    background-image: url(${AboutPhotoPortrait});
    background-repeat: no-repeat;
    background-size: cover;
    height: 20rem;
    width: 20rem;
    max-height:250px;
    max-width:400px;
    flex-wrap: wrap;
    @media(max-width: 1050px) {
        margin-top: 2rem;
    }

    @media(max-width: 700px) {
        margin-top: 0;
        height: 13rem;
        width: 17rem;
    }
   
`;

export const ImagePortrait2 = Styled.div`
    background-image: url(${AboutPhotoPortrait2});
    background-repeat: no-repeat;
    background-size: cover;
    height: 21rem;
    width: 21rem;
    max-height:270px;
    max-width:253px;
    margin-top: 3rem;

    @media(max-width: 700px) {
        margin-top: 0;
    }

`;

export const ImagePortrait3 = Styled.div`
    background-image: url(${AboutPhotoPortrait4});
    background-repeat: no-repeat;
    background-size: cover;
    height: 21rem;
    width: 21rem;
    max-height:300px;
    max-width:300px;

    @media(max-width: 1050px) {
        margin-top: 2rem;
    }

    @media(max-width: 700px) {
        margin-top: 0;
    }


`;

export const ImagePortrait4 = Styled.div`
    background-image: url(${AboutPhotoPortrait3});
    background-repeat: no-repeat;
    background-size: cover;
    height: 14rem;
    width: 18rem;
    transform: rotate(5deg);
    max-height:300px;
    max-width:300px;

    @media(max-width: 1050px) {
        margin-top: 2rem;
    }

    @media(max-width: 700px) {
        margin-top: -2rem;
    }

`;

export const ContactTitle = Styled.div`
    font-size: 4rem;
    text-align: left;
    color: white;
    font-family: 'Lobster', cursive;
    padding-top: 11rem;

    @media(max-width: 1100px) {
        font-size: 3.5rem;
    }

    @media(max-width: 874px) {
        text-align: center;
        font-size: 2.8rem;
    }
`;

export const ContactFormContainer = Styled.div`
    display: flex;
    justify-content: center;
`;

export const ContactForm = Styled.div`
    height: 28rem;
    width: 25rem;
    margin-bottom: 3rem;
    background-color: rgba(77, 52, 47, 0.63);
    border-radius: 0.5rem;

    @media(max-width: 600px) {
        height: 30rem;
    }
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
    width: 31rem;
    text-align: center;

    @media(max-width: 600px) {
        margin-top: -2rem;
    }
    


`;

export const LinksWrapper = Styled.div`
    display: flex;
    margin-left: -8rem;

    @media(max-width: 500px) {
        margin: 0 auto;
    }
`;

export const SocialMediaWrapper = Styled.div`
    display: flex;
    margin-right: 5rem;

    @media(max-width: 600px) {
        margin-right: 0;
    }
`;

export const ButtonPanelWrapper = Styled.div`
    display: flex;
    justify-content: center;
    margin-top: 3rem;
    flex-wrap: wrap;
    gap: 1rem;
`;

export const ButtonProduct = Styled.button`
    background-color: #f5eddb;
    margin: 1rem 1rem;
    width: 8rem;
    height: 2.5rem;
    border: none;
    font-family: 'Lobster', cursive;
    font-size: 1.1rem;
    color: #4D342F;

    &:hover {
        background-color: #4D342F;
        transition: 0.2s;
        cursor: pointer;
        color: white;
    }
`;

export const ImagesWrapper = Styled.div`
    display: flex;
    margin: 0 auto;
    margin-top: 2rem;
    flex-wrap: wrap;
    max-width: 1456px;
    justify-content: center;

`;

export const ProductImage = Styled.image`
    background-image: url(${Torba1});
    max-width: 20rem;
    min-width: 20rem;
    height: 13rem;
    background-size: cover;
    border-radius: .7rem;
    flex: 1 0 30%;
    margin: 1rem 1rem;
    background-position: center center;
`;

export const AttentionLabel = Styled.div`
    text-align:left;
    max-width: 50rem;
    margin-left: 1rem;
    margin-bottom: 2rem;
    width: 100%;
    color: #4D342F;

    @media(max-width: 977px) {
        margin-left: 1rem;
        width: auto;
    }
`;

export const ProductsCardDescrptionWrapper = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 960px;
    
    margin: 5rem auto;

    @media(max-width: 977px) {
        flex-wrap: wrap;
        min-width: 0;
        margin: 2rem auto;
    }
`;

export const Description = Styled.div`
    width: 100%;
    text-align: center;
    font-size: 1.2rem;
    color: #4D342F;
    margin-top: 1rem;

    @media(max-width: 977px) {
        flex-wrap: wrap;
        margin-top: 2rem;
    }
`;

export const StyledApp = Styled.a`
   * { 
       text-decoration: none;
   }
`;