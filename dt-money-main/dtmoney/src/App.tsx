import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './NewTransactionModal';
import { GlobalStyle } from "./styles/global";

// para acessebilidade tirando do body e colocando no root
Modal.setAppElement('#root');


export function App() {

    // criando modal
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    // function para abrir a modal
    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true)
    }

    // function para fechar a modal
    function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false)
    }



  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />

        
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />


      <GlobalStyle />
    </>
  );
}


