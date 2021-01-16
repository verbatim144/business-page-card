import styled from "styled-components";

export const ProductsImagesWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const ImageWrapper = styled.div<{ imageSrc: any }>`
    display: flex;
    align-items:center;
    justify-content: center;
    font-size: 1.5rem;
    color: #f5eddb;
    font-weight: 800;
    margin: 0.25rem;
    
    background: ${props => `linear-gradient(
        to bottom,
        rgba(0,0,0, 0.5),
        rgba(0,0,0, 0.5)
      ),url(${props.imageSrc})`};
    background-size: cover;
    width: 26rem;
    height: 15rem;
    -webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;

    &:hover{
        opacity: .5;
        cursor: pointer;
    }

    @media(max-width: 450px) {
        width: 20rem;
        height: 12rem;
    }
`;
export const ProductImage = styled.div<{ imageSrc: any }>`
    display: flex;
    align-items:center;
    justify-content: center;
    font-size: 1.5rem;
    color: #f5eddb;
    font-weight: 800;
    margin: 0.25rem;
    
    background: ${props => `url(${props.imageSrc})`};
    background-size: cover;
    width: 24rem;
    height: 13rem;
    -webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;

    &:hover{
        opacity: .5;
        cursor: pointer;
    }

    @media(max-width: 400px) {
        height: 10rem;
    }
`;

export const ProductImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const Image = styled.figure`
   
`;

export const ProductContentWrapper = styled.div`
    max-width: 1248px;
    margin: 1rem auto;
    background-color: white;
    border-radius: 20px;
    padding: 1rem;
`;
