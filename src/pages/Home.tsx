import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
import { Link } from 'react-router-dom';
import { Transaction } from '../types/Transaction';

const Home: React.FC = () => {
  const transactionContext = useContext(TransactionContext);

  if (!transactionContext) return null;

  const { transactions, addTransaction, setTransactions, setTransactionToEdit } = transactionContext;

  const handleDeleteTransaction = (id: number) => {
    setTransactions(prevTransactions => prevTransactions.filter(t => t.id !== id));
  };

  const handleEditTransaction = (transaction: Transaction) => {
    setTransactionToEdit(transaction);
  };

  return (
    <div>
      <h1>Home</h1>
      <TransactionForm onSubmit={addTransaction} />
      <TransactionList 
        transactions={transactions} 
        onDelete={handleDeleteTransaction} 
        onEdit={handleEditTransaction} 
      />
      <Link to="/dashboard">Ir para o Dashboard</Link>
    </div>
  );
};

export default Home;
