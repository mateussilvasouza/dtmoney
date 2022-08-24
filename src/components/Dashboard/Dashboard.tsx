import { Sumary } from "../Sumary/Sumary";
import { Transactions } from "../TransactionsTable/Transactions";
import { Container } from "./style";

export function Dashboard(){
    return(
        <Container>
            <Sumary/>
            <Transactions/>
        </Container>
    )
}