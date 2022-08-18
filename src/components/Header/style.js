import styled from "styled-components";

export const HeaderStyled = styled.header`
    background-color: var(--gray-0);
    display: flex;
    width: 100%;
    max-width: 100%;
    height: max-content;

    .header__container
    {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        margin: 15px;
        width: 100%;
    }
    .header__container_title
    {
        width: max-content;
        height: max-content;
        
    }
    .title_1
    {
        font-size: var(--heading-1);
        color: var(--gray-100);
        font-weight: 700;
    }
    .title_2
    {
        margin-left: 0.2rem;
        font-size: var(--heading-4);
        color: var(--color-secondary);
        font-weight: 800;
    }
    .header__container_search
    {
        display: flex;
        background-color:white;
        border: solid 2px var(--gray-20);
        border-radius: 10px;
        align-items: center;
        width: 100%;
        max-width: 100%;
        height: 65px;
        max-height: 100%;
    }
    .focus
    {
        border-color: var(--gray-100);
    }
    .box__search
    {
        display: flex;
        padding: 10px;
        width: 100%;
        height: 100%;
    }
    .search_input
    {
        width: 100%;
        flex-basis: 80%;
        flex-grow: 1;
    }
    button
    {
        font-size: var(--heading-4);
        font-weight: 500;
        background-color: var(--color-primary);
        color: var(--gray-0);
        width: 100px;
        height:2.5rem;
        border-radius: 10px;
    }
    button:hover
    {
        background-color: var(--color-primary-50);
        color: var(--gray-0);
    }
    @media screen and (min-width :1024px) 
    {
        .header__container
        {
            justify-content: space-between;
            flex-flow: nowrap;
        }
        .header__container_title
        {
            width: 70%;
        }
        .header__container_search
        {
            width: 43%;
        }
    }
    @media screen and (min-width : 1280px) 
    {
        .header__container_search
        {
            width: 40%;
        }
        .header__container_title
        {
            width: 64%;
        }
    }
    @media screen and (min-width : 1366px) 
    {
        .header__container_search
        {
            width: 40%;
        }
        .header__container_title
        {
            width: 70%;
        }
    }
`
export const Pesquisa = styled.p`
    
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 100%;
    text-align: center;
    font-size: var(--heading-2);
    font-weight: 600;
    color: var(--gray-100);
    span
    {
        color: var(--gray-50);
    }
`