import { useRef, useState } from "react"
import {HeaderStyled,Pesquisa} from "./style"
import Button from "../Button"
function Header({produtosFiltrados,setProdutosFiltrados,produtos,setProdutos})
{
    const [focus,setfocus] = useState(false)
    const [pesquisa,setPesquisa] = useState("")
    const [isPesquisa,setIsPesquisa] = useState(false)
    const input = useRef()
    function search()
    {
        const inputValue = new RegExp(input.current.value,"gi")
        if(input.current.value.trim() != "")
        {
            const filtrados = produtosFiltrados.filter((produto)=> 
            {
                const {name,category} = produto
                if(name.match(inputValue) || category.match(inputValue))
                {
                    return produto
                }
            })
            if(filtrados.length > 0)
            {
                setPesquisa(input.current.value)
                setIsPesquisa(true)
                setProdutos(filtrados)
            }
            else
            {
                setIsPesquisa(false)
            }
        }
        else
        {
            setProdutos(produtosFiltrados)
            setIsPesquisa(false)
            setPesquisa("")
        }
    }
    return (
        <>
    <HeaderStyled>  
        <div className="header__container">
        <div className="header__container_title">
            <span className="title_1">Burguer</span>
            <span className="title_2">Kenzie</span>
        </div>
        <div className={ focus ? `header__container_search focus`: `header__container_search`}>
            <div className="box__search">
                <input ref={input} onBlur = {()=> setfocus(false)} onFocus={()=>setfocus(true)} className="search_input" placeholder="Digitar pesquisa" type="text" />
                <button onClick={search}>Pesquisar</button>
            </div>
        </div>
        </div>
    </HeaderStyled>
    {isPesquisa && <Pesquisa className="pesquisa">Resultados para <span>{pesquisa}</span></Pesquisa>}
        </>
    )
}
export default Header