import {ProdutoStyled} from "./style"
import Button from "../Button"
import { useState } from "react"
function Produto({produtosCarrinho,id,name,category,img,price,produtos,setProdutosCarrinho})
{
    return(
        <ProdutoStyled>
                <div className="box__img">
                    <img src={img} alt="produtos kenzie" />
                </div>
            <div className="produto__container">
                <p className="name">
                    {name}
                </p>
                <p className="category">
                    {category}
                </p>
                <p className="price">
                    {`R$${price}`}
                </p>
                <Button produtosCarrinho = {produtosCarrinho} idProduto = {id} produtos = {produtos} setProdutosCarrinho = {setProdutosCarrinho} name = {name} category = {category} img = {img} price = {price}>Adicionar</Button>
            </div>
        </ProdutoStyled>
    )
}
export default Produto