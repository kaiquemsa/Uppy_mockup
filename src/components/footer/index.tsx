import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { Container as ContainerStyle, InfoClient, FirstSection, SecondSection, ThirdSection, LinkSection, Division, BottomFooter, FirstColumn, LastColumn, MiddleColumn, IconsStyle } from './styles';
import Instagram from '@mui/icons-material/Instagram';
import WhatsApp from '@mui/icons-material/WhatsApp';
import Logo from '../../assets/uppy_logo2.png';
import GoogleApproved from '../../assets/google_approved.png';
import SSL from '../../assets/ssl.png';
import MoneyIcon from '@mui/icons-material/MoneyOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import PixIcon from '@mui/icons-material/Pix';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import Boleto from '../../assets/boleto.png';
import Picpay from '../../assets/picpay.png';
import Tiktok from '../../assets/tiktok.png';
import Facebook from '../../assets/facebook.png';
import { colors } from '../../global/colors';

function Footer() {

    return (    
        <ContainerStyle>
            <InfoClient>
                <Division>
                    <FirstSection>
                        <div >
                            <h1>Entre em contato</h1>   
                        </div>
                        <div style={{display:'flex', gap:16}}>
                            <IconButton color="inherit" aria-label="instagram" style={{backgroundColor:'white', color:`${colors.uppyRose}`, width:48}}>
                                <Instagram />
                            </IconButton>
                            <IconButton color="inherit" aria-label="facebook" style={{backgroundColor:'white', color:`${colors.uppyRose}`, width:48, height:48}}>
                                <img src={Facebook} alt="simble facebook" />
                            </IconButton>
                            <IconButton color="inherit" aria-label="tiktok" style={{backgroundColor:'white', color:`${colors.uppyRose}`, width:48, height:48}}>
                                <img src={Tiktok} alt="simble tiktok" />
                            </IconButton>
                            <IconButton color="inherit" aria-label="whastapp" style={{backgroundColor:'white', color:`${colors.uppyRose}`, width:48}}>
                                <WhatsApp />
                            </IconButton>                            
                        </div>
                    </FirstSection>
                    <SecondSection>
                        <h2>Rua Davy Jhones 47, Sorocaba-SP</h2>
                        <h1>(15) 00000-0000</h1>
                    </SecondSection>
                    <hr />
                    <ThirdSection>
                    <LinkSection>
                        <Link to="/minha-conta" color="inherit" style={{textDecoration: "none", color: "white"}}>
                            Minha conta
                        </Link>
                        <Link to="/atendimento" color="inherit" style={{textDecoration: "none", color: "white"}}>
                            Atendimento
                        </Link>
                        <Link to="/produtos" color="inherit" style={{textDecoration: "none", color: "white"}}>
                            Todos os Produtos
                        </Link>
                        <Link to="/mais-vendidos" color="inherit" style={{textDecoration: "none", color: "white"}}>
                            Mais Vendidos
                        </Link>
                        <Link to="/novidades" color="inherit" style={{textDecoration: "none", color: "white"}}>
                            Novidades
                        </Link>
                    </LinkSection>
                    </ThirdSection>
                </Division>
            </InfoClient>
            <BottomFooter>
                <FirstColumn>
                    <h1>Formas de pagamento</h1>
                    <IconsStyle>
                        <MoneyIcon />
                        <ShoppingCartIcon />
                        <img src={Boleto} alt="boleto scanner" />
                        <CreditCardOutlinedIcon />
                        <PixIcon />
                        <img src={Picpay} alt="picpay" />
                        <RestaurantOutlinedIcon />
                    </IconsStyle>
                </FirstColumn>
                <MiddleColumn>
                    <h1>Sua compra está segura.</h1>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                        <img src={GoogleApproved} alt="google approved" />
                        <img src={SSL} alt="ssl" />
                    </div>
                </MiddleColumn>
                <LastColumn>
                    <h2>Criado com</h2>
                    <img src={Logo} alt="logo uppy"/>
                </LastColumn>
            </BottomFooter>
        </ContainerStyle>
    );

};

export { Footer }