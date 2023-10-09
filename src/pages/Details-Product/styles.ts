import styled from "styled-components";
import { IconButton } from "@mui/material"
import { colors } from "../../global/colors"


export const Container = styled.div `
    display: flex;
    max-width: 1170px;
    width: 100%;
    margin: auto;
    flex-direction: column;
    
    h1 {
        color: ${colors.uppyRose};
        font-size: 36.62px;
        font-weight: 800;
        margin: 0;
    }

    h2 {
        color: ${colors.uppyBlue};
        font-size: 36.62px;
        font-weight: 800;
    }

    span {
        font-size: 18.75px;
    }

`;

export const FirstSection = styled.div `
    margin-top: 24px;
    margin-bottom: 64px;
    display: flex;
    flex-direction: row;
`;

export const SectionBuy = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: flex-start;
`;

export const MiddlePrice = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 128px;
    margin-bottom: 48px;
`;

export const IconButtonStyled = styled(IconButton) `
   color: ${colors.uppyBlueThird} !important; 
   font-size: 24px !important;
   font-weight: 500;

   .css-zylse7-MuiButtonBase-root-MuiIconButton-root:hover {
    background-color: unset !important;
    }
`;

export const Datasheet = styled.div `
    display: flex;
    flex-direction: row; 
    margin-bottom: 64px;
    gap: 32px;

    img {
        width: 469px;
        height: 314px;
        border-radius: 16px;
    }

    hr {
        border: none;
        border-top: 1px solid ${colors.uppyRose};
        width: 100%;
    }

    ul {
        list-style-type: none !important;
        padding: 0 !important;
    }

    span {
        width: 312px;
        display: inline-flex;
    }
`;