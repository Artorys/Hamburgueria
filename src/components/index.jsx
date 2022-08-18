import Header from "./Header"
import ListaProdutos from "./ListaProdutos"
import Carrinho from "./Carrinho"
import CarrinhoVazio from "./CarrinhoVazio"
import AppStyled from "./style"
import { useEffect, useState } from "react"
import api from "../services/api"
function App()
{
    const [produtos,setProdutos] = useState([])
    const [produtosCarrinho,setProdutosCarrinho] = useState([])
    const [produtosFiltrados,setProdutosFiltrados] = useState([])
    const checarCarrinho = produtosCarrinho.length > 0

    async function getProducts()
    {
        api.get(``).then((res)=>{
            setProdutos(res.data)
            setProdutosFiltrados(res.data)
        })
    }


    useEffect(()=>
    {
        getProducts()
    },[])
    
    return(
        <AppStyled>
            <Header produtosFiltrados = {produtosFiltrados} setProdutosFiltrados = {setProdutosFiltrados} setProdutos= {setProdutos} produtos = {produtos}></Header>
            <div className="main__container">
            <main>
                <ListaProdutos produtosCarrinho = {produtosCarrinho} setProdutosCarrinho = {setProdutosCarrinho} produtos = {produtos}></ListaProdutos>
            </main>
            <aside>
                {
                checarCarrinho 
                ?
                <Carrinho setProdutosCarrinho = {setProdutosCarrinho} produtosCarrinho = {produtosCarrinho}></Carrinho>
                :
                <CarrinhoVazio></CarrinhoVazio>
                }
            </aside>
            </div>
        </AppStyled>
    )
}
export default App