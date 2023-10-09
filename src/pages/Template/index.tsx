import { Link } from "react-router-dom"
import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { Container, IconButtonStyled } from "../Details-Product/styles"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import BuildingWebsite from '../../assets/building_website.png';
import { Detach, DetachStyle } from "../../components/section/styles";
import ConstructionIcon from '@mui/icons-material/Construction';

function Template() {

    return (
        <>
            <Header />
            <Container>
                <div style={{marginTop: 48}}>
                    <Link to={"/"}>
                    <IconButtonStyled color="inherit" aria-label="back button">
                        <ArrowBackIosIcon />
                        Voltar
                        </IconButtonStyled>
                    </Link>
                </div>
                <div style={{display:"flex", flexDirection:"column", marginTop:64}}>
                    <DetachStyle>
                        <Detach>
                        <ConstructionIcon style={{fontSize: 36}}/>
                        </Detach>
                        <h1>Web site under construction, come back later</h1>
                    </DetachStyle>
                    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <img src={BuildingWebsite} alt="building website" style={{width:1000}}/>
                    </div>
                </div>
            </Container>
            <Footer />
        </>
    )
}

export { Template }