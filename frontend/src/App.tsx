import React from 'react';
import './App.css';
import { BusinessCardPage } from './pages/business-card.page';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import { StyledApp } from './pages/business-card.page.styles';
import { BackIcon, ProductTitle, ProductWrapper, TitleWrapper } from './App.styled';
import { backpacksImages, bagsImages, beauticianImages, etuiImages, masksImages, otherImages } from './images';
import { ProductContentWrapper, ProductImage, ProductImageWrapper } from './pages/components/products.styled';

const ProductComponents = (props: any) => (
  <ProductWrapper>
    <TitleWrapper>
      <Link to="/#products"><BackIcon className="fa fa-arrow-left" aria-hidden="true"></BackIcon></Link>
      <ProductTitle>{props.title}</ProductTitle>
      <div />
    </TitleWrapper >

  <ProductContentWrapper>
    <p>{props.description}</p>
    <ProductImageWrapper>
      {props.data.images.map((value: any) => (
        <ProductImage imageSrc={value.image} />
      ))}
    </ProductImageWrapper>
  </ProductContentWrapper>
  </ProductWrapper >
)


function App() {
  return (
    <StyledApp>
      <Router>
        <Switch>
          <Route exact path="/">
            <BusinessCardPage />
          </Route>
          <Route path="/torby">
            <ProductComponents title="Torby" description={bagsImages.description} data={bagsImages} />
          </Route>
          <Route path="/kosmetyczki">
            <ProductComponents title="Kosmetyczki" description={beauticianImages.description} data={beauticianImages} />
          </Route>
          <Route path="/maseczki">
            <ProductComponents title="Maseczki" description={masksImages.description} data={masksImages} />
          </Route>
          <Route path="/plecaki">
            <ProductComponents title="Plecaki" description={backpacksImages.description} data={backpacksImages} />
          </Route>
          <Route path="/etui">
            <ProductComponents title="Etui" description={etuiImages.description} data={etuiImages} />
          </Route>
          <Route path="/other">
            <ProductComponents title="Inne produkty" description={otherImages.description} data={otherImages} />
          </Route>
        </Switch>
      </Router>
    </StyledApp>
  );
}

export default App;
