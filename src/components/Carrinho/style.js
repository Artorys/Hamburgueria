import styled from "styled-components";

const CarrinhoStyled = styled.div`
    background-color:#F5F5F5;
    display: flex;
    flex-flow: column;
    gap: 1rem;
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
    ul
    {
        width:100% ;
        height: 100%;
        border-bottom: solid 2px rgba(0,0,0,0.2 );
    }
    .carrinho_lista
    {
        width: 100%;
        height: 200px;
        overflow-y: auto;
    }
    li
    {
        width: 100%;
        height: max-content;
        position: relative;
    }
    .container__carrinho
    {
        position: relative;
        width: 100%;
        height: 100%;
        padding: 1rem;
        display: flex;
        gap: 1rem;
        align-items: center;
    }
    .carrinho_img
    {
        width: 100px;
        height: 100px;
        background-color: #E0E0E0;;
        border-radius: 10px;
    }
    .carrinho_info
    {
        display: flex;
        flex-flow: column;
        gap: 1rem;
        width: max-content;
        height: 100%;
    }
    .carrinho_name
    {
        font-size: var(--heading-2);
        font-weight: 600;
    }
    .carrinho_category
    {
        font-size: var(--heading-4);
        color: var(--gray-50);
    }
    .remove
    {
        font-size: var(--heading-4);
        color: var(--gray-50);
        position: absolute;
        top: 1rem;
        right:1rem;
    }
    .box_info
    {
        width: 100%;
        display: flex;
        justify-content: space-between;
        height: max-content;
        padding:1rem;
    }
    .total
    {
        font-size: var(--heading-5);
        font-weight: 600;
    }
    .preco
    {
        font-size: var(--heading-5);
        color: var(--gray-50);
    }
    .removerTodos
    {
        color: var(--gray-50);
        background-color: var(--gray-20);
        font-weight: 600;
        width: 100%;
        height: max-content;
        text-align: center;
        padding: 1.5rem;
    }
    .removerTodos:hover
    {
        background-color: var(--gray-50);
        color: var(--gray-20);
    }
    @media screen and (min-width:1024px) 
    {
        
    }
`
export default CarrinhoStyled