/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useState } from 'react';
import ProductDetach1 from '../../assets/Frame_2.png';
import ProductDetach2 from '../../assets/Frame_3.png';
import ProductDetach3 from '../../assets/Frame_4.png';
import 'react-multi-carousel/lib/styles.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CarouselDetach from 'react-multi-carousel';
import ProductCard from '../product-card';
import ProductContext from '../../hooks/ProductContext';
import { LinkStyle } from './style';
import { colors } from '../../global/colors';

function CourselPersonalized() {
    const context = useContext(ProductContext);

    if (!context) {
      return null;
    }
  
    const { setProducts } = context;

    const handleProductClick = (product: any) => {
        setProducts([product]);
      };

    const products = [
        { image: ProductDetach1, productName: 'Notebook Gamer', price: 'R$59,00', width: '368px',  },
        { image: ProductDetach2, productName: 'Computador montado', price: 'R$69,00', width: '368px',  },
        { image: ProductDetach3, productName: 'Xbox Series X', price: 'R$79,00', width: '368px',  },
        { image: ProductDetach1, productName: 'Notebook Gamer', price: 'R$79,00', width: '368px',  },
        { image: ProductDetach2, productName: 'Computador montad', price: 'R$79,00', width: '368px',  },
        { image: ProductDetach3, productName: 'Xbox Series X', price: 'R$79,00', width: '368px',  },
    ];

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
    };

    const CustomRightArrow = ({ onClick, disabled }: { onClick: () => void, disabled: boolean }) => {
    return (
        <button 
        onClick={() => { if (!disabled) onClick(); }} 
        style={{ 
            position: 'absolute', 
            right: -40, 
            top: 'calc(50% - 15px)', 
            zIndex: 2, 
            backgroundColor: 'transparent', 
            border: 'none', 
            outline: 'none',
            cursor: 'pointer', 
        }}
        >
        <ArrowForwardIosIcon style={{ color: `${colors.uppyRose}` }} />
        </button>
    );
    };
      
    const CustomLeftArrow = ({ onClick, disabled }: { onClick: () => void, disabled: boolean }) => {
    return (
        <button 
        onClick={() => { if (!disabled) onClick(); }} 
        style={{ 
            position: 'absolute', 
            left: -50, 
            top: 'calc(50% - 15px)', 
            zIndex: 2, 
            backgroundColor: 'transparent', 
            border: 'none', 
            outline: 'none',
            cursor: 'pointer', 
        }}
        >
        <ArrowBackIosIcon style={{ color: `${colors.uppyRose}` }} />
        </button>
    );
    };
      
    const [currentSlide] = useState(0);

    let carouselRef = React.useRef<any>(null);

    const handleRightClick = () => {

        if (carouselRef.current) {
            carouselRef.current.next();
        }
    };
  
    const handleLeftClick = () => {
        if (carouselRef.current) {
            const currentSlide = carouselRef.current.state.currentSlide;
            if (currentSlide > 0) {
                carouselRef.current.prev();
            }
        }
    };

    return (
        <>
            <CarouselDetach
                customRightArrow={<></>}
                customLeftArrow={<></>}
                responsive={responsive}
                ref={carouselRef}
            >
                {products.map((product, index) => (
                    <div key={index}>
                        <LinkStyle 
                        to={`/details-product/${product.productName}`} 
                        style={{textDecoration: "none"}}
                        onClick={() => handleProductClick(product)}
                        >
                            <ProductCard {...product} />
                        </LinkStyle>
                    </div>
                ))}
            </CarouselDetach>
            <CustomRightArrow onClick={handleRightClick} disabled={currentSlide === products.length - 1} />
            <CustomLeftArrow onClick={handleLeftClick} disabled={currentSlide === 0} />
        </>
    )
}

export { CourselPersonalized };