import Styled from 'styled-components';

export const ProductWrapper = Styled.div`
    background-color: #f5eddb;
    height: 100vh;
    `;

export const ProductTitle = Styled.div`
    margin: 0;
    text-align: center;
    font-size: 3rem;
    font-weight: 500;
    font-family: 'Lobster', cursive;
    color: #4D342F;
`;

export const TitleWrapper = Styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1248px;
    margin: 0 auto;
`;

export const BackIcon = Styled.i`
    color: #4D342F;
    margin-top: 1rem;
    font-size: 2rem !important;

    :hover {
        cursor: pointer;
    }
`;