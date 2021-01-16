import React from "react";
import { ImageWrapper, ProductsImagesWrapper } from "./products.styled";
import Torba from "../../assets/torba5.jpg";
import Backpack from "../../assets/backpack4.jpg";
import Kosmetyczka from "../../assets/kosmetyczka4.jpg";
import Maseczki from "../../assets/masks1.jpg";
import Etui from "../../assets/etui1.jpg";
import Other from "../../assets/other1.jpg";
import { Link } from "react-router-dom";

export const ProductComponent = (props: any) => {
    return (
        <>
            <ProductsImagesWrapper>
                <Link to='/torby'>
                    <ImageWrapper imageSrc={Torba}>
                        Torby
                    </ImageWrapper>
                </Link>
                <Link to='/plecaki'>
                    <ImageWrapper imageSrc={Backpack}>
                        Plecaki
            </ImageWrapper>
                </Link>
                <Link to='/maseczki'>
                    <ImageWrapper imageSrc={Maseczki}>
                        Maseczki
            </ImageWrapper>
                </Link>
            </ProductsImagesWrapper>
            <ProductsImagesWrapper>
                <Link to='/kosmetyczki'>
                    <ImageWrapper imageSrc={Kosmetyczka}>
                        Kosmetyczki
            </ImageWrapper>
                </Link>
                <Link to='/etui'>
                    <ImageWrapper imageSrc={Etui}>
                        Etui
            </ImageWrapper>
                </Link>
                <Link to='/other'>
                    <ImageWrapper imageSrc={Other}>
                        Inne
            </ImageWrapper>
                </Link>
            </ProductsImagesWrapper>
        </>
    );
}