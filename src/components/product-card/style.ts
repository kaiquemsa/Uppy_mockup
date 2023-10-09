import IconButton from '@material-ui/core/IconButton';
import styled from "styled-components";
import Card from '@material-ui/core/Card';
import CardMedia from "@material-ui/core/CardMedia";


export const CardStyle = styled(Card) `
    box-shadow: none !important;
    margin-top: 32px;
`;

export const ContainerCard = styled.div `
    position: relative;
    border-radius: 16px;
`;

export const CardMediaStyle = styled(CardMedia) `
    width: 100%; 
    height: 100%; 
    border-radius: 16px;
`;

export const IconButtonStyle = styled(IconButton) `
    position: absolute !important;
    top: 8px;
    right: 8px;
    color: white !important;
`;