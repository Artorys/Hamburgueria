import styled from "styled-components";

const AppStyled = styled.div`
    width: 100%;
    height: 100%;

    .main__container
    {
        width: 100%;
        height: 100%;
    }
    main
    {
        margin-left: 1rem;
        margin-top: 1rem;
        width: 100%;
        height:max-content;
    }
    aside
    {
        position: relative;
        width: auto;
        height: max-content;
    }
    @media screen and (min-width : 1024px) 
    {
        .main__container
        {
            display: flex;
        }   
        main
        {
            width: 60%;
        } 
        aside
        {
            width: 40%;
        }
    }
    @media screen and (min-width : 1366px) 
    {
        .main__container
        {
            display: flex;
        }   
        main
        {
            width: 66%;
        } 
        aside
        {
            width: 40%;
        }
    }
    
`
export default AppStyled