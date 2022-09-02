import styled from 'styled-components';

type ContainerProps = {
    bg: string
}
export const Container = styled.div<ContainerProps>`
    max-width: 600px;
    margin: auto;
    background-color: ${props => props.bg};
    color: white;
    padding: 20px;
    display: flex;

    .link {
        color: #FFF;

        &:hover{
            color: #00FF00;
        }
    }

    span {
        font-weight: bold;
        color: #000;
    }

    @media (max-width: 500px) { //responsividade
        background-color: #00FF00;
        flex-direction: column;

        span {
            color: #0000FF;
        }
    }
`;

type ButtonProps = {
    bg: string,
    small?: boolean
}
export const Button = styled.button <ButtonProps>`
    font-size: ${props => props.small ? '15px' : '30px'};
    background-color: ${props => props.bg};
    border-radius: 5px;
`;