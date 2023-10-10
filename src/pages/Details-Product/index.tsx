import React, { useEffect, useState } from 'react';
import Container from "@material-ui/core/Container";
import { useParams } from 'react-router-dom';
import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { Container as ContainerStyle, IconButtonStyled, Datasheet, MiddlePrice, SectionBuy, FirstSection } from "./styles"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from 'react-router-dom';
import DatasheetPhoto from '../../assets/datasheet.png';
import { CarouselAmpliation } from '../../components/carousel-ampliation';
import ProductContext from '../../hooks/ProductContext';
import { useContext } from 'react';
import { Button, IconButton, InputAdornment } from '@mui/material';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import TextField from '@mui/material/TextField';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { colors } from '../../global/colors';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function DetailsProduct() {
    const matches = useMediaQuery('(max-width:600px)');

    const [activyColor, setActivyColor] = useState(false);

    useEffect(function () {
      function posicionScroll() {
        if (window.scrollY > 10) {
          setActivyColor(true);
        } else {
          setActivyColor(false);
        }
      }
      window.addEventListener("scroll", posicionScroll);
    }, []);

    const { productName } = useParams();

    const context = useContext(ProductContext);

    if (!context) {
      throw new Error("Component must be used within a ProductProvider");
    }
    
    const { products } = context;

    const image = products[0]?.image;
    const price = products[0]?.price;

    const [count, setCount] = useState(0);

    return (
        <>
        <Container maxWidth="lg">
            <Header action={activyColor}/>
            <ContainerStyle>
                <div style={{marginTop: matches ? 48 : 140}}>
                    <Link to={"/"}>
                       <IconButtonStyled color="inherit" aria-label="back button">
                          <ArrowBackIosIcon />
                           Voltar
                        </IconButtonStyled>
                    </Link>
                </div>
                <FirstSection>
                    <div style={{marginRight:matches ? 0 : 82, marginLeft:matches ? 20 : 32}}>
                        <CarouselAmpliation image={image}/>
                    </div>
                    <SectionBuy>
                        <h2>{productName}</h2>
                        <MiddlePrice>
                            <div>
                                <h1>{price}</h1>
                                <span>ou até 12x de 4,90 sem juros</span>
                            </div>
                            <div>
                              <TextField
                                value={count}
                                InputProps={{
                                  style: {
                                    width: '120px',
                                    height: '46px',
                                    border: `1px solid ${colors.uppyRose}`,
                                    borderRadius: '64px',
                                  },
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <IconButton onClick={() => setCount(count - 1)} disabled={count === 0}>
                                        <ArrowBackIosNewOutlinedIcon style={{fontSize:12}}/>
                                      </IconButton>
                                    </InputAdornment>
                                  ),
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <IconButton onClick={() => setCount(count + 1)}>
                                        <ArrowForwardIosOutlinedIcon style={{fontSize:12}}/>
                                      </IconButton>
                                    </InputAdornment>
                                  ),
                                }}
                              />
                            </div>
                        </MiddlePrice>
                        <div style={{display:"flex", flexDirection:"column", gap:24}}>
                            <Button variant="contained" style={{width:matches ? 360 : 469, height:48,borderRadius:64,backgroundColor:`${colors.uppyRose}`}}>Adicionar ao carrinho</Button>
                            <Button style={{color: `${colors.uppyBlueSecond}`, gap:8}}>
                                <ShareOutlinedIcon/>
                                Compartilhar
                            </Button>
                        </div>
                    </SectionBuy>
                </FirstSection>
                <div style={{marginBottom: 64}}>
                    <h1>Descrição do produto</h1>
                    <span>Lorem ipsum dolor sit amet consectetur. Viverra pulvinar maecenas rutrum nunc enim. Lacinia amet cras elit viverra. At lorem fringilla mi non et neque odio. Lorem at augue nulla integer. Enim vel vulputate ac etiam at volutpat eu praesent at. Tempor quis ac amet et fermentum.</span>
                    <br /><br />
                    <span>Sed facilisi condimentum mi id. Vulputate iaculis ullamcorper mollis lectus nunc vivamus. Duis volutpat leo pharetra faucibus dignissim. At cras senectus ut sem enim nunc pellentesque vestibulum. Elit magna maecenas ac vitae massa arcu.</span>
                </div>
                <Datasheet>
                    <img src={DatasheetPhoto} alt="datasheet" />
                    <div style={{width: "100%"}}>
                        <h1>Ficha Técnica</h1>
                        <hr />
                        <ul>
                            <li>Processador: Core I7</li>
                            <li>GPU: RTX 3060</li>
                            <li>Teclado mecânico</li>
                            <li>Monitor: 1920x1080 144Hz</li>
                            <li>Energia: 100Kw</li>
                        </ul>
                        <span>At cras senectus ut sem enim nunc pellentesque vestibulum. Elit magna maecenas ac vitae massa arcu.</span>
                    </div>
                </Datasheet>
            </ContainerStyle>
        </Container>
        <Footer />
        </>
    )
}

export { DetailsProduct }