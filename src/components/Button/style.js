import styled from "styled-components";

const ButtonStyled = styled.button`
        font-size: var(--heading-4);
        font-weight: 500;
        background-color: var(--color-primary);
        color: var(--gray-0);
        width: 100px;
        height:2.5rem;
        border-radius: 10px;
        &:hover
        {
                background-color: var(--color-primary-50);
                color: var(--gray-0);
        }
`
export default ButtonStyled