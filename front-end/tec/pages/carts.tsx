


export default function Cart(){
    return(
        <div>
            <div>
                <h1>Logotipo</h1>
            </div>
            <div>
                <ul>
                    <li>Sacola</li>
                    <li>Identificação</li>
                    <li>Pagamento</li>
                </ul>
            </div>
            <div>
                <h6>Sacola</h6>
                <div>
                    <img src=""></img>
                    <h4>Cartucho HP 664 colorido</h4>
                    <div>
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        <p>Excluir</p>
                    </div>
                    <div>
                        <h4>R$ 72,99 no Pix</h4>
                        <h5>R$ 75,99 no Cartão</h5>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h3>Frete para o CEP</h3>
                    <input type="text" placeholder="00000-000"/>
                </div>
                <div>
                    <div>
                        <h3>Frete Total</h3> <h3>R$ 21,99</h3>
                    </div>
                    <div>
                        <h3>Produtos</h3> <h3>R$ 528,99</h3>
                    </div>
                    <div>
                        <h2>Total</h2> <h2>R$ 600,00</h2>
                    </div>
                    <button>Comprar</button>
                </div>
            </div>
        </div>
    )
}