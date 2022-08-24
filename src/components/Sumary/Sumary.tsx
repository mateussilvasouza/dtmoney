import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

import { Container } from "./style"

export function Sumary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entrada" />
                </header>
                <strong>R$500,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saída" />
                </header>
                <strong>R$500,00</strong>
            </div>
            <div>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="" />
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    )
}