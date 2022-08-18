import ButtonStyled from "./style"
function Button({produtosCarrinho,idProduto,children,produtos,setProdutosCarrinho})
{
    function addCarrinho()
    {
        const produtoEncontrado = produtos.find(({id})=> id == idProduto)
        const produtoDuplicado = produtosCarrinho.find(({id})=> id == idProduto)
        if(produtoDuplicado == undefined)
        {
            setProdutosCarrinho((oldProdutos)=> [...oldProdutos,produtoEncontrado])
        }
    }
    return(
    <ButtonStyled onClick={addCarrinho}>{children}</ButtonStyled>
    )
}
export default Button