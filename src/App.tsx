import { Dashboard } from "./components/Dashboard/Dashboard";
import { Header } from "./components/Header/Header";
import { GlobalStyle } from "./styles/global";
import {createServer} from 'miragejs'

createServer({
    routes(){
        this.namespace = "api"
        this.get("/transactions", ()=>[
            { titulo: "Desenvolvimento de Website", valor: "R$12.000,00", categoria: "Desenvolvimento", data:"20/08/2022"},
            { titulo: "Desenvolvimento de Website", valor: "R$12.000,00", categoria: "Desenvolvimento", data:"20/08/2022"},
            { titulo: "Desenvolvimento de Website", valor: "R$12.000,00", categoria: "Desenvolvimento", data:"20/08/2022"}
        ])
    }
})

export function App() {
  return (
    <>
      <Header/>
      <Dashboard/>
      <GlobalStyle/>
    </>
  );
}

