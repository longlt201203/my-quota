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
    transition: all .3s ease-in;

    & > ${Typography.NormalText} {
        color: ${props => props.active ? props.theme.color.primary.text : props.theme.color.primary.original};
        transition: all .3s ease-in;
    }

    &:hover {
        cursor: pointer;
        ${props => !props.active && `background-color: ${props.theme.color.primary.original};`}
    }

    &:hover > ${Typography.NormalText} {
        ${props => !props.active && `color: ${props.theme.color.primary.text};`}
    }
`;

export interface PaginationProps {
    start?: number;
    end?: number;
    current?: number;
    limit?: number;
    onChange?: (newValue: number) => void;
    onPrev?: () => void;
    onNext?: () => void;
}

export default function Pagination(props: PaginationProps) {
    return (
        <PaginationContainer>
            {(props.current && props.start) && (props.current > props.start) && (
                <PaginationItem active onClick={() => props.onPrev && props.onPrev()}>
                    <Icons.AngleLeftIcon variant="primaryText" />
                </PaginationItem>
            )}
            {Array.from({ length: props.end && props.start ? (props.end - props.start + 1) : 0 }, (_, index) => (
                <PaginationItem key={index} active={props.current ? props.current == (index + 1) : false} onClick={() => props.onChange && props.onChange(index+1)}>
                    <Typography.NormalText>{index + 1}</Typography.NormalText>
                </PaginationItem>
            ))}
            {(props.current && props.end) && (props.current < props.end) && (
                <PaginationItem active onClick={() => props.onNext && props.onNext()}>
                    <Icons.AngleRightIcon variant="primaryText" />
                </PaginationItem>
            )}
        </PaginationContainer>
    );
}