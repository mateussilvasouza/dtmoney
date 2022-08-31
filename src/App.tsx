
import {createServer, Model} from 'miragejs';
import { useState } from 'react';
import { Header } from "./components/Header/Header";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from './components/newTransactionModal/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions'


createServer({
    models:{
      transaction: Model,
    },

    seeds(server){
      server.db.loadData({
        transactions: [
          {
            id: 1,
            title: 'Freelance de website',
            type: 'deposit',
            category: 'Dev',
            amount: 6000,
            createdAt: new Date('2022-03-04 09:51:00'),
          },
          {
            id: 2,
            title: 'Aluguel',
            type: 'withdrawn',
            category: 'Casa',
            amount: 1100,
            createdAt: new Date('2022-03-10 11:01:00'),
          }
        ]
      })
    },

    routes(){
                this.namespace = "api";
        this.get("/transactions", ()=> this.schema.all('transaction'));
        this.post('/transactions', (schema,request)=>{
          const data = JSON.parse(request.requestBody);

          return schema.create('transaction', data)
        })
    },
});

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false)
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle/>
    </TransactionsProvider>
  );
}

