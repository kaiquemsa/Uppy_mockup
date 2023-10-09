import styled from "styled-components";
import TextField from '@mui/material/TextField';
import { colors } from "../../global/colors";
 
export const Container = styled.div `
    display: flex;
    max-width: 1170px;
    width: 100%;
    margin: auto;
    flex-direction: column;
`;


export const CarouselStyle = styled.div `
    margin-top: 16px;

    .MuiPaper-elevation1 {
        box-shadow: none;
    }
    .css-8ucetn-MuiButtonBase-root-MuiIconButton-root {
        color: ${colors.uppyRose};
    }
`;

export const Detach = styled.div `
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 16px 24px 16px 48px;
    background-color: ${colors.uppyRose};
    border-radius: 0 64px 64px 0;
    color: white;
    font-size: 36px;
`;

export const DetachStyle = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 64px;
    gap: 16px;
    h1 {
        font-size: 36px;
        font-weight: 800;
        color: ${colors.uppyRose};
    }
`;

export const ListProducts = styled.div `
    display:flex; 
    flex-direction: row; 
    gap: 32px;

    div {
        font-size:23.44px; 
        font-weight:800;
        color: ${colors.uppyBlue};
    }

    p {
        font-size:23.44px; 
        font-weight:500;
        color: ${colors.uppyRose};
    }

`;

export const WhoAreSection = styled.div `
    flex-direction: row;
    display: flex;
    align-items: center;
    gap: 32px;

    h1 {
        font-size: 24px;
        font-weight: 500;
    }

    img {
        border-radius: 16px;
    }
`;

export const Subscription = styled.div`
    display: flex;
    width: 100%;
    height: 186px;
    background-color: ${colors.uppyBlue};
    border-radius: 16px;
    margin-bottom: 64px;
`;

export const Lettering = styled.div `
    display: flex;
    flex-direction: column;
    h1 {
        color: ${colors.uppyRose};
        font-size: 36px;
        font-weight: 800;
        margin: 0;
    }

    h2 {
        color: white;
        font-size: 18px;
        font-weight: 500;
        margin: 0;
    }
`;

export const Division = styled.div `
    display: flex;
    align-items: center;
    gap: 64px;
    padding:  24px 64px 24px 64px;
`;

export const TextFieldStyle = styled(TextField)`
  width: 278px;
  height: 56px;
  background-color: white;
  border: 1px solid ${colors.uppyBlackThird} !important;
  border-radius: 64px;

  .MuiOutlinedInput-root {
    &:hover fieldset {
      border: none;
    }
    &.Mui-focused fieldset {
      border: none;
    }
  }

  .MuiFormLabel-root.Mui-focused {
    display: none;
  }
`;

export const Boxes = styled.div `
    display: flex;
    flex-direction: row;
    gap: 16px;

    button {
        width: 100px;
        border-radius: 64px;
        background-color: ${colors.uppyRose};
        color: white;
    }

    button:hover {
        background-color: ${colors.uppyRose};
    }
`;