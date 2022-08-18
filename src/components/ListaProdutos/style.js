import styled from "styled-components";

const ListaProdutosStyled = styled.ul`
        padding: 2rem 0;
        display: flex;
        width: 100%;
        height: max-content;
        display: flex;
        flex-flow: row nowrap;
        gap:1rem;  
        justify-content: flex-start;
        align-items: flex-start;
        overflow: auto;

        @media screen and (min-width : 800px) 
        {
         flex-flow: row wrap;
         justify-content: center;
        }
        @media screen and (min-width: 1024px)
        {
          width: 70%;
          justify-content: flex-start;
        }
        @media screen and (min-width: 1280px)
        {
          width: 80%;
          justify-content: flex-start;
        }

`
export default ListaProdutosStyled