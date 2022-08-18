import { useState } from "react"
import CarrinhoStyled from "./style"
function Carrinho({produtosCarrinho,setProdutosCarrinho})
{
    function remove(index)
    {
        setProdutosCarrinho((oldProdutos)=>
        {
            const newProdutos = [...oldProdutos]
            newProdutos.splice(index,1)
            return newProdutos
        })
    }
    function removerTudo()
    {
        setProdutosCarrinho([])
    }
    return(
        <CarrinhoStyled>
            <div className="carrinho__box">
            <p>
                Carrinho de compras
            </p>
            </div>
            <ul>
                <div className="carrinho_lista">
                    {produtosCarrinho.map(({img,name,category,price},index)=>
                        <li key={index}>
                            <div className="container__carrinho">
                                <img className="carrinho_img" src={img} alt="produtos kenzie"></img>
                                <div className="carrinho_info">
                                    <p className="carrinho_name">{name}</p>
                                    <p className="carrinho_category">{category}</p>
                                </div>
                                <p onClick={()=>remove(index)} className="remove">Remover</p>
                            </div>
                        </li>)}
                </div>
            </ul>
                    <div className="box_info">
                        <p className="total">Total</p>
                        <p className="preco">
                            R${
                                produtosCarrinho.reduce((priceAcc,{price})=>
                                {
                                    return priceAcc + price
                                },0)
                            }</p>
                    </div>
                    <button onClick={removerTudo} className="removerTodos">Remover Todos</button>
        </CarrinhoStyled>
    )
}
export default Carrinho