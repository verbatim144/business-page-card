import React from "react";
import { AboutMeSection, BorderImage, BottomBorder, ContactSection, FooterSection, LineBreak, Link, MainSection, Navbar, NeedleImage, NeedleWrapper, PageTitle, PageWrapper, ProductCard, ProductSection } from "./business-card.page.styles";


export const BusinessCardPage = () => {
    return (
        <PageWrapper>
            <MainSection>
                <Navbar>
                    <Link>O mnie</Link>
                    <Link>Produkty</Link>
                    <Link>Kontakt</Link>
                </Navbar>
                <PageTitle>Pracownia Rękodzieła Artystycznego <br />
                        Wiktoria
                </PageTitle>
            </MainSection>
            <BorderImage />
            <AboutMeSection />
            <LineBreak />
            <NeedleWrapper>
                <NeedleImage />
            </NeedleWrapper>
            <ProductSection>
                <ProductCard/>
            </ProductSection>
            <BottomBorder/>
            <ContactSection/>
            <FooterSection/>
        </PageWrapper>
    )
}