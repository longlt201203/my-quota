import styled from "styled-components";
import Typography from "./Typography";
import Icons from "./Icon";

const PaginationContainer = styled.div`
    display: flex;
    column-gap: 8px;
`;

interface PaginationItemProps {
    active?: boolean;
}

const PaginationItem = styled.div<PaginationItemProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    box-sizing: border-box;
    border: 2px solid ${props => props.theme.color.primary.original};
    border-radius: 4px;
    background-color: ${props => props.active ? props.theme.color.primary.original : props.theme.color.primary.text};

    & > ${Typography.NormalText} {
        color: ${props => props.active ? props.theme.color.primary.text : props.theme.color.primary.original};
    }

    &:hover {
        cursor: pointer;
    }
`;

export interface PaginationProps {
    start?: number;
    end?: number;
    current?: number;
    limit?: number;
    onPrev?: () => void;
    onNext?: () => void;
}

export default function Pagination(props: PaginationProps) {
    return (
        <PaginationContainer>
            <PaginationItem active onClick={() => props.onPrev && props.onPrev()}>
                <Icons.AngleLeftIcon variant="primaryText" />
            </PaginationItem>
            {Array.from({ length: props.end && props.start ? (props.end - props.start + 1) : 0 }, (_, index) => (
                <PaginationItem key={index} active={props.current ? props.current == (index+1) : false}>
                    <Typography.NormalText>{index+1}</Typography.NormalText>
                </PaginationItem>
            ))}
            <PaginationItem active onClick={() => props.onNext && props.onNext()}>
                <Icons.AngleRightIcon variant="primaryText" />
            </PaginationItem>
        </PaginationContainer>
    );
}