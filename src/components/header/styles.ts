import styled from "styled-components";
import AppBar from '@mui/material/AppBar';
import TextField from '@mui/material/TextField';

import { colors } from "../../global/colors";

export const AppBarStyle = styled(AppBar) `
    z-index: 10;
    background-color: ${colors.uppyRose} !important;
    height: 120px;
    border-radius: 0 0 16px 16px;
    transition: all 0.5s ease-out !important;

    &.activyColor {
        height: 68px;
        background-color: ${colors.uppyRoseSecond} !important;
        opacity: 0.7;
        box-shadow: 0;
        img{
            width: 77px;
            height: 34px;
        }

        .TextField {
          display: none;
        }

        .LinkStyle {
          margin-top: 0;
        }
    }

    @media (max-width: 600px) {
      height: 40px !important;
      width: fit-content !important;
      left: 0 !important;
    }
`;

export const LinkStyle = styled.div `
    display: flex;
    gap: 82px;
    font-size: 18.75px;
    align-items: center;
    margin-top: 48px;

    a {
      color: white !important;
    }
`;

export const LinkSection = styled.div `
    display: flex;
    gap: 32px;
    padding-left: 82px;
`;

export const TextFieldStyle = styled(TextField)`
  width: 312px;
  background-color: white;
  border: 1px solid ${colors.uppyBlackThird} !important;
  border-radius: 80px;

  > div {
    border-radius: 80px !important;
  }

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

export const ContainerSearchIcons = styled.div `
   display: flex;
   align-items: center;
   gap: 24px;
`;