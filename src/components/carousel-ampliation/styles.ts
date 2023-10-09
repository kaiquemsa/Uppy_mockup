import styled from "styled-components";
import Carousel from 'react-material-ui-carousel';


export const ContainerCarousel = styled.div `
    width: 100%;
    display: flex;
    
    ul {
       list-style-type: none;
       padding: 0;
    }

    img {
        border-radius: 16px;
        width: 569px;
        height: 569px;
    }
`;

export const CarouselLayout = styled.div `
    display: flex;
    overflow: hidden;
    width: 100%;
`;

export const carouselArrowStyles = styled.div `
    position: absolute;
    z-index: 2;
    top: calc(50% - 15px);
    width: 30px;
    height: 30px;
    cursor: pointer;
    background-color: rgba(0,0,0,.5);
    color: #fff;
`;
  

export const CarouselStyle = styled(Carousel) `
    width: 569px;
    overflow: visible !important;

    .MuiPaper-elevation1 {
        box-shadow: none;
    }

    .css-1m9128y {
        display: none;
    }

    .css-1abc02a {
        height: 10%;
        top: 281px;
        right: -48px;
    }

    .css-hn784z {
        height: 10%;
        top: 281px;
        left: -48px;
    }
`;