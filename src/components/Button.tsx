import styled, { css } from "styled-components";

export interface ButtonProps {
    variant?: "primary" | "secondary" | "danger";
    size?: "medium";
}

const ButtonCss = {
    medium: css`
        font-size: 1rem;
        padding: 0 16px;
        height: 32px;
    `,
    primary: css`
        color: ${props => props.theme.color.primary.text};
        background-color: ${props => props.theme.color.primary.original};

        &:hover {
            background-color: ${props => props.theme.color.primary.hover};
        }
    `,
    secondary: css`
        color: ${props => props.theme.color.secondary.text};
        background-color: ${props => props.theme.color.secondary.original};

        &:hover {
            background-color: ${props => props.theme.color.secondary.hover};
        }
    `,
    danger: css`
        color: ${props => props.theme.color.danger.text};
        background-color: ${props => props.theme.color.danger.original};

        &:hover {
            background-color: ${props => props.theme.color.danger.hover};
        }
    `,
};

const Button = styled.button<ButtonProps>`
    font-family: ${props => props.theme.font.normalText};
    border: none;
    border-radius: 4px;
    transition: all .3s ease-in;
    ${props => ButtonCss[props.variant || "primary"]}
    ${props => ButtonCss[props.size || "medium"]}

    &:hover {
        cursor: pointer;
    }
`;

export default Button;