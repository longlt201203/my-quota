import styled, { css } from "styled-components";

export interface IconProps {
    size?: "medium";
    variant?: "primary" | "primaryText" | "dangerText";
}

const IconCss = {
    primary: css`
        color: ${props => props.theme.color.primary.original};
    `,
    primaryText: css`
        color: ${props => props.theme.color.primary.text};
    `,
    dangerText: css`
        color: ${props => props.theme.color.danger.text};
    `
}

const Icon = styled.i<IconProps>`
    ${props => IconCss[props.variant || "primary"]}
`;

const IconSizeMap = {
    medium: ""
}

const Icons = {
    EditIcon: (props: IconProps) => <Icon {...props} className={`fa-regular fa-pen-to-square ${IconSizeMap[props.size || "medium"]}`}></Icon>,
    TrashCanIcon: (props: IconProps) => <Icon {...props} className={`fa-regular fa-trash-can ${IconSizeMap[props.size || "medium"]}`}></Icon>,
    CheckIcon: (props: IconProps) => <Icon {...props} className={`fa-regular fa-circle-check ${IconSizeMap[props.size || "medium"]}`}></Icon>,
    BanIcon: (props: IconProps) => <Icon {...props} className={`fa-solid fa-ban ${IconSizeMap[props.size || "medium"]}`}></Icon>,
};

export default Icons;