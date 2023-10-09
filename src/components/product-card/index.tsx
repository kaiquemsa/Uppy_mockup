import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { CardMediaStyle, CardStyle, ContainerCard, IconButtonStyle } from './style';

interface ProductCardProps {
  image: string;
  productName: string;
  price: string;
  width?: number | string;
  height?: number | string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, productName, price, width = 'auto', height = 'auto' }) => {
  return (
    <CardStyle style={{width, height}}>
    <ContainerCard >
        <CardMediaStyle
            component="img"
            alt={productName}
            image={image}
        />
        <IconButtonStyle aria-label="favorite product">
            <FavoriteBorder style={{fontSize: 30}}/>
        </IconButtonStyle>

    </ContainerCard>
      <CardContent>
        <Typography variant="h5" component="div" align="center">
          {productName}
        </Typography>
        <Typography variant="body2" color="secondary" align="center">
          {price}
        </Typography>
      </CardContent>
    </CardStyle>
  );
}

export default ProductCard;
