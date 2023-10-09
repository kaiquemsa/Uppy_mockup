import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../global/colors";

export const Container = styled.div `
    display: flex;
    max-width: 1170px;
    width: 100%;
    margin: auto;
    flex-direction: column;
`;

export const LinkStyle = styled(Link) `
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

