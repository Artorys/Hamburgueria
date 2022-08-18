import ListaProdutosStyled from "./style"
import Produto from "../Produto"

function ListaProdutos({produtosCarrinho,setProdutosCarrinho,produtos})
{
    return(
        <ListaProdutosStyled>
                {produtos.map(({id,name,category,img,price})=>
                {
                    return <Produto produtosCarrinho = {produtosCarrinho} setProdutosCarrinho={setProdutosCarrinho} produtos={produtos} id = {id} key={id} name = {name} category = {category} img = {img} price = {price}></Produto>
                })}
        </ListaProdutosStyled>
    )
}
export default ListaProdutos