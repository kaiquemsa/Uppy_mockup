import styled from "styled-components";
import AppBar from '@mui/material/AppBar';
import TextField from '@mui/material/TextField';

import { colors } from "../../global/colors";

export const AppBarStyle = styled(AppBar) `
    background-color: ${colors.uppyRose} !important;
    height: 120px;
    border-radius: 0 0 16px 16px;
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