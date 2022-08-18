import CarrinhoVazioStyled from "./style"
function CarrinhoVazio()
{
    return (
        <CarrinhoVazioStyled>
            <div className="carrinho__box">
                <p>
                    Carrinho de compras
                </p>
            </div>
            <div className="vazio__box">
                <p className="msg_1">
                    Sua sacola está vazia
                </p>
                <p className="msg_2">
                    Adicione itens
                </p>
            </div>
        </CarrinhoVazioStyled>
    )
}
export default CarrinhoVazio