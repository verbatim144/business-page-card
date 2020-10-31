import React from "react";
import { AboutMeSection, AboutUsTitle, BorderImage, BottomBorder, ContactSection, Container, FirstContainer, FooterSection, ImagesContainer, LineBreak, Link, MainSection, Navbar, NeedleImage, NeedleWrapper, PageTitle, PageWrapper, ProductCard, ProductSection, TextSpan, ImagePortrait, ImagePortrait2, ImagePortrait3, ImagePortrait4, AboutUsText, ContactTitle, ContactFormContainer, ContactForm, ContactImage, ContactDataContaier, ContactDataWrapper, DataText, DataIcon, FooterTitle, LinksWrapper, HeaderPageLogo, FooterPageLogo, SocialMediaWrapper, ProductSoon } from "./business-card.page.styles";


export const BusinessCardPage = () => {

    const currentYear = new Date().getFullYear();

    return (
        <PageWrapper>
            <MainSection>
                <Navbar>
                    <HeaderPageLogo />
                    <LinksWrapper>
                        <Link>O mnie</Link>
                        <Link>Produkty</Link>
                        <Link>Kontakt</Link>
                    </LinksWrapper>
                    <div />
                </Navbar>
                <PageTitle>Pracownia Rękodzieła Artystycznego <br />
                        Wiktoria
                </PageTitle>
                <div />
            </MainSection>
            <BorderImage />
            <AboutMeSection>
                <Container>
                    <AboutUsTitle>A zaczęło się tak...</AboutUsTitle>
                    <FirstContainer>
                        <AboutUsText>
                            Od najmłodszych lat interesowało mnie krawiectwo.
                            Miłość do szycia zaszczepiła we mnie moja babcia, nie tylko osoba uzdolniona manualnie, wspaniała gospodyni, ale także kobieta o wielkim sercu.
                            Wiedze, którą mi przekazała wykorzystuje do dnia dzisiejszego.
                            <TextSpan>Swoją naukę zaczynałam od szycia ręcznego,szydełkowania, robienia na drutach, haftu recznego, aż do szycia na maszynie.</TextSpan>
                            <TextSpan>Spoglądając na starą maszynę Singer, wracam pamięcią do tamtych lat...
                            Wspaniałych, bajkowych i odkrywczych, gdzie każdy dzień był jak niespodzianka.</TextSpan>
                        </AboutUsText>
                        <ImagesContainer>
                            <ImagePortrait />
                            <ImagePortrait2 />
                        </ImagesContainer>
                    </FirstContainer>
                    <FirstContainer>
                        <ImagesContainer>
                            <ImagePortrait3 />
                            <ImagePortrait4 />
                            <AboutUsText>
                                Z wykształcenia jestem technologiem odzieżowym.
                                Po wielu latach pracy w branży odzieżowej, przekazuje wiedzę innym pasjonatom szycia.
                                Prowadzę kursy i szkolenia, a w czasie wolnym od pracy-szyję w domu.
                                <TextSpan>
                                    Dlatego prezentuje Państwu moje wyroby: torby, plecaki, kosmetyczki,maseczki,etui i inne rękodzieła z których
                                    każda jest starannie wykonana i niepowtarzalna.
                                </TextSpan>
                            </AboutUsText>
                        </ImagesContainer>
                    </FirstContainer>
                </Container>
            </AboutMeSection>
            <LineBreak />
            <NeedleWrapper>
                <NeedleImage />
            </NeedleWrapper>
            <ProductSection>
                <ProductSoon>Sekcja produktów zostanie wkrótce dodana...</ProductSoon>
            </ProductSection>
            <BottomBorder />
            <ContactSection>
                <Container>
                    <ContactTitle>Kontakt</ContactTitle>
                    <ContactFormContainer>
                        <ContactForm>
                            <ContactImage />
                            <ContactDataContaier>
                                <ContactDataWrapper>
                                    <DataIcon className="fa fa-envelope" style={{ fontSize: "25px" }} />
                                    <DataText>babciawikcia7@gmail.com</DataText>
                                </ContactDataWrapper>
                                <ContactDataWrapper>
                                    <DataIcon className="fa fa-phone" style={{ fontSize: "25px" }} />
                                    <DataText>+48 600 823 012</DataText>
                                </ContactDataWrapper>
                                <ContactDataWrapper>
                                    <DataIcon className="fa fa-shopping-cart" style={{ fontSize: "25px" }} />
                                    <DataText>PKO Bank Polski
                                    <br />33 1020 4580 0000 1202 0020 9213 <br /> Opcje dostawy : Paczka w Ruchu, InPost</DataText>
                                </ContactDataWrapper>
                            </ContactDataContaier>
                        </ContactForm>
                    </ContactFormContainer>
                </Container>
            </ContactSection>
            <FooterSection>
                <FooterPageLogo />
                <FooterTitle>&copy; Agnieszka Owczarek {currentYear}</FooterTitle>
                <SocialMediaWrapper>
                    <DataIcon className="fa fa-instagram" style={{ fontSize: "25px", margin: "0 1rem" }} />
                    <DataIcon className="fa fa-facebook" style={{ fontSize: "25px", margin: "0 1rem" }} />
                </SocialMediaWrapper>
            </FooterSection>
        </PageWrapper>
    )
}