import styled from "styled-components";

const Container = styled.table`
    font-family: ${props => props.theme.font.normalText};
    width: 100%;
    /* border: 1px solid; */
`;

export interface TableItemProps {
}

const Item = styled.td<TableItemProps>`
    padding: 16px;
`;

export interface TableRowProps {
    header?: boolean;
}

const Row = styled.tr<TableRowProps>`
    border-bottom: 1px solid ${props => props.theme.color.dark.original};
    background-color: white;

    ${props => props.header && `font-weight: bold;`}
    ${props => props.header && `background-color: ${props.theme.color.primary.original};`}

    & > ${Item} {
        ${props => props.header && `color: ${props.theme.color.primary.text};`}
    }

    /* &:hover {
        ${props => !props.header && `background-color: ${props.theme.color.primary.hover};`}
    } */

    /* &:hover > ${Item} {
        ${props => !props.header && `color: ${props.theme.color.primary.text};`}
    } */
`;

const Table = {
    Container,
    Row,
    Item
};

export default Table;