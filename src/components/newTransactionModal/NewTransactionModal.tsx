import { FormEvent, useState} from 'react';
import { useTransactions } from '../../hooks/useTransactions'

import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'

import {Container, TransactionTypeContainer, TransitionType} from './style'

interface NewTransactionsModalProps{
    isOpen: boolean,
    onRequestClose: () => void
}

Modal.setAppElement('#root');

export function NewTransactionModal({isOpen, onRequestClose}:NewTransactionsModalProps){
    const {createTransaction} = useTransactions()
    
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const[type, setType] = useState('deposit')

    async function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();

        await createTransaction({
            title,
            amount,
            category,
            type,
        })

        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');
        onRequestClose();
    }

    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName={"react-modal-overlay"}
            className={"react-modal-content"}
            >

            <button 
             onClick={onRequestClose}
             className={"react-modal-close"}>
                <img src={closeImg} alt="Fechar Modal"/>
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar Transação</h2>

                <input 
                 type="text" 
                 placeholder='Título'
                 value={title}
                 onChange={(e)=> setTitle(e.target.value)}
                />

                <input
                 type="number"
                 placeholder='Valor'
                 value={amount}
                 onChange={(e)=> setAmount(Number(e.target.value))}
                />

                <TransactionTypeContainer>
                    <TransitionType
                     type='button'
                     onClick={()=>{ setType('deposit')}}
                     isActive={type === 'deposit'}
                     activeColor="green">
                        <img src={incomeImg} alt="" />
                        <span>Entrada</span>
                    </TransitionType>
                    <TransitionType
                     type='button'
                     onClick={()=>{ setType('withdraw')}}
                     isActive={type === 'withdraw'}
                     activeColor="red">
                        <img src={outcomeImg} alt="" />
                        <span>Saída</span>
                    </TransitionType>
                </TransactionTypeContainer>

                <input
                 type="text"
                 placeholder='Categoria'
                 value={category}
                 onChange={(e) => setCategory(e.target.value)}
                />

                <button type="submit">Cadastrar</button>

            </Container>
           
        </Modal>
    )
}
