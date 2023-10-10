import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { Container as ContainerStyle, IconButtonStyled } from "../Details-Product/styles"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import BuildingWebsite from '../../assets/building_website.png';
import { Detach, DetachStyle } from "../../components/section/styles";
import ConstructionIcon from '@mui/icons-material/Construction';
import { Container } from "@material-ui/core";
import useMediaQuery from '@material-ui/core/useMediaQuery';

function Template() {
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

    return (
        <>
            <Header action={activyColor}/>
            <Container>
                <ContainerStyle>
                    <div style={{marginTop: matches ? 80 : 140}}>
                        <Link to={"/"}>
                        <IconButtonStyled color="inherit" aria-label="back button">
                            <ArrowBackIosIcon />
                            Voltar
                            </IconButtonStyled>
                        </Link>
                    </div>
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <DetachStyle>
                            <Detach>
                            <ConstructionIcon style={{fontSize: 36}}/>
                            </Detach>
                            <h1 style={{fontSize: matches ? 24: 36.62}}>Web site under construction, come back later</h1>
                        </DetachStyle>
                        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                            <img src={BuildingWebsite} alt="building website" style={{width: matches ? '420px' : '1000px'}}/>
                        </div>
                    </div>
                </ContainerStyle>
            </Container>
            <Footer />
        </>
    )
}

export { Template }