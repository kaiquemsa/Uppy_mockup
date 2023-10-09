import styled from "styled-components";
import { colors } from "../../global/colors";


export const Container = styled.div `
    display: flex;
    width: 100%;
    height: 463px;
    color: white;
    flex-direction: column;
    h1 {
        margin: 0;
    }
`;

export const InfoClient = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 290px;
    width: 100%;
    background-color: ${colors.uppyRose};
    border-radius: 16px;

    hr {
        width: 91.63%;
    }
`;

export const Division = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 40px;
    gap: 20px;
`;

export const FirstSection = styled.div `
    display: flex;
    flex-direction: row;
    gap: 32px;
    align-items: center;
    h1 {
        font-size: 29.3px;
        font-weight: 700;
    }
`;

export const SecondSection = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;

    h1 {
        font-size: 23.44px;
        font-weight: 800;
    }
    h2 {
        font-size: 18.75px;
        font-weight: 500;
    }
`;

export const ThirdSection = styled.div `
    display: flex;
    flex-direction: row;
`;

export const LinkSection = styled.div `
    display: flex;
    gap: 16px;
    font-size: 18.75px;
`;

export const BottomFooter = styled.div `
    display: flex;
    flex-direction: row;
    max-width: 1170px;
    width: 100%;
    margin: auto;
    align-items: center;
    gap: 64px;
    color: ${colors.uppyBlue};

    h1 {
        font-size: 23.44px;
        font-weight: 800;
    }

    h2 {
        font-size: 18.75px;
        font-weight: 500;
    }
`;

export const FirstColumn = styled.div `
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-right: 95px;
`;

export const IconsStyle = styled.div `
    display: flex;
    align-items: center;
    gap: 16px;
    color: ${colors.uppyBlueThird};
`;

export const MiddleColumn = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 24px;
    padding: 0 32px 0 32px;

    img {
        width: 72px;
        height: 42px;
    }
`;

export const LastColumn = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    padding-left: 183px;

    img {
        width: 52.46px;
        height: 24px;
    }
`;