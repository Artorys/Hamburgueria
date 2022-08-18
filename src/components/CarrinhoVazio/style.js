import styled from "styled-components";

const CarrinhoVazioStyled = styled.div`
    box-sizing: border-box;
    overflow: hidden;
    margin: 1rem;
    position: relative;
    width: auto;
    height: max-content;
    border-radius: 5px;

    .carrinho__box
    {
        width: 100%;
        color: var(--gray-0);
        font-size: var(--heading-3);
        font-weight: 700;
        padding: 1.2rem;
        height: max-content;
        background-color: var(--color-primary);
    }
    .vazio__box
    {
        display: flex;
        background-color: var(--gray-0);
        flex-flow: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 150px;
        gap: 10px;
    }
    .msg_1
    {
        font-size: var(--heading-3);
        font-weight: 600;
    }
`
export default CarrinhoVazioStyled