import { Container, Detach, CarouselStyle, DetachStyle, WhoAreSection, Subscription, Lettering, Division, TextFieldStyle, Boxes, ListProducts } from './styles';
import Computer from '../../assets/Frame.png'
import Carousel from 'react-material-ui-carousel';
import { Button, Paper } from '@material-ui/core';
import Star from '@mui/icons-material/StarBorderRounded';
import Banner from '../../assets/Frame_5.png'
import Home from '@mui/icons-material/HomeOutlined';
import Store from '@mui/icons-material/StorefrontOutlined';
import WhoAre from '../../assets/Frame_10.png';
import ProductCard from '../product-card';
import Product1 from '../../assets/Frame_6.png';
import Product2 from '../../assets/Frame_7.png';
import Product3 from '../../assets/Frame_8.png';
import Product4 from '../../assets/Frame_9.png';
import { CourselPersonalized } from '../carousel-slide'

function Section() {

    var items = [
        {
            img: Computer,
            alt: "computer code"
        },
        {
            img: Computer,
            alt: "computer code"
        },
        
        {
            img: Computer,
            alt: "computer code"
        },
    ]

    return (
        <Container>
            <CarouselStyle>
                <Carousel>
                    {
                        items.map((item, i) => <Item key={i} item={item} />)
                    }
                </Carousel>
            </CarouselStyle>
            <DetachStyle>
                <Detach>
                    <Star style={{fontSize: 36}}/>
                </Detach>
                <h1>Destaques</h1>
            </DetachStyle>
            <div style={{ position: 'relative' }}>
                <CourselPersonalized />
            </div>
            <img src={Banner} alt="" style={{marginTop: 64, borderRadius: 16}}/>
            <div>
                <DetachStyle>
                    <Detach>
                        <Store style={{fontSize: 36}}/>
                    </Detach>
                    <h1>Produtos</h1>
                </DetachStyle>
                <ListProducts>                    
                    <ProductCard
                        image={Product1}
                        productName="All In One"
                        price="R$ 1059,00"
                        width={268}
                    />
                    <ProductCard
                        image={Product2}
                        productName="Teclado e mouse"
                        price="R$ 459,00"
                        width={268}
                    />
                    <ProductCard
                        image={Product3}
                        productName="PC Montado"
                        price="R$ 6999,00"
                        width={268}
                    />
                    <ProductCard
                        image={Product4}
                        productName="RTX 3060 TI e Core i9"
                        price="R$ 7590,00"
                        width={268}
                    />
                </ListProducts>
            </div>
            <div style={{marginBottom: 64}}>
                <DetachStyle>
                    <Detach>
                        <Home style={{fontSize: 36}}/>
                    </Detach>
                    <h1>Quem somos</h1>
                </DetachStyle>
                <WhoAreSection>
                    <h1>Lorem ipsum dolor sit amet consectetur. Risus lacinia proin tortor sit. Tellus purus in quis maecenas amet pretium. In metus morbi bibendum facilisis ultrices ipsum. Cras quis tellus velit eget id risus imperdiet vitae. Et vivamus sagittis enim metus pretium eros sit nibh. Euismod phasellus natoque malesuada enim. </h1>
                    <img src={WhoAre} alt="moça comprando" />
                </WhoAreSection>
            </div>
            <Subscription>
                <Division>
                    <Lettering>
                        <h1>Inscreva-se e acompanhe</h1>
                        <h2>Nossa newsletter sempre cheia de novidades.</h2>
                    </Lettering>
                    <Boxes>
                        <TextFieldStyle
                        id="search"
                        label="Nome"
                        variant="outlined"
                        />
                        <TextFieldStyle
                        id="search"
                        label="Email"
                        variant="outlined"       
                        />
                        <Button variant="contained">
                            Enviar
                        </Button>
                    </Boxes>
                </Division>
            </Subscription>
        </Container>
    );
};

function Item(props: any) {
    return (
        <Paper>
            <img src={props.item.img} alt={props.item.alt} style={{marginTop: 40, height: 658.13, borderRadius: 16}}/>
        </Paper>
    )
}

export { Section };
