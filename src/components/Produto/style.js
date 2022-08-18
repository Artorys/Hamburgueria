import styled from "styled-components";

export const ProdutoStyled = styled.li`
    
    border: solid 1px var(--gray-20);
    border-radius: 10px;
    position: relative;
    display: flex;
    flex-flow: column wrap;
    width:200px;
    height:max-content;
    align-items: flex-start;
    transition: 1s;

    &:hover
    {
        transform: scale(1.1);
    }
    
    .produto__container
    {
        padding: 1rem;
        display: flex;
        flex-flow: column wrap;
        overflow-wrap: break-word;
        white-space: wrap;
        width:50%;
        height:200px;
        align-items: flex-start;
        justify-content: space-between;
    }
    .box__img
    {
        width: 100%;
        height: max-content;
        background-color: var(--gray-0);
        border-radius: 10px;
    }
    img
    {
        padding: 1rem;
        width: 200px;
        height: 200px;
    }
    .name
    {
        font-size: var(--heading-3);
        font-weight: 700;
    }
    .category
    {
        font-size: var(--caption);
        color: var(--gray-100);
        opacity: 0.6;
    }
    .price
    {
        font-size: var(--body);
        color: var(--color-primary);
    }
`